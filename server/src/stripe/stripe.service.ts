import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CreateStripeIntentDto } from './dto/stripe-intent.dto';
import { createDonation } from './interface/createDonation.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { Initiative } from 'src/initiatives/entities/initiative.entity';
import { findUser } from 'src/users/utils';
import { ConfigService } from '@nestjs/config';

const stripeApiKey = process.env.STRIPE_SECRET_KEY;
const stripeCliKey = process.env.STRIPE_WEBHOOK_SECRET;

const successUrl = process.env.STRIPE_SUCCESS_URL;
const cancelUrl = process.env.STRIPE_CANCEL_URL;

@Injectable()
export class StripeService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
    private configService: ConfigService,
  ) {}

  private stripeProvider = new Stripe(
    this.configService.get<string>('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2023-08-16',
    },
  );

  async createPaymentIntent(
    createStripeIntentDto: CreateStripeIntentDto,
  ): Promise<any> {
    const convertAmount = createStripeIntentDto.amount * 100;
    try {
      await findUser(createStripeIntentDto.userId, this.userModel);

      const session = await this.stripeProvider.checkout.sessions.create({
        line_items: [
          {
            quantity: 1,
            price_data: {
              product_data: {
                name: 'donation',
              },
              currency: 'usd',
              unit_amount: convertAmount,
            },
          },
        ],
        mode: 'payment',
        success_url: `${successUrl}/donation`,
        cancel_url: `${cancelUrl}/donation`,
        payment_intent_data: {
          metadata: {
            userId: createStripeIntentDto.userId,
            initiativeId: createStripeIntentDto.initiativeId,
          },
        },
      });
      return session.url;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async stripeWebHook(signature: string, payload: Buffer) {
    const stripeEvent: Stripe.Event =
      await this.stripeProvider.webhooks.constructEventAsync(
        payload,
        signature,
        stripeCliKey,
      );

    const paymentEventData: Stripe.Event.Data = stripeEvent.data;

    if (stripeEvent.type == 'payment_intent.succeeded') {
      const paymentEventMetadata: Stripe.PaymentIntent =
        paymentEventData.object as Stripe.PaymentIntent;
      const isGlobalDonation =
        paymentEventMetadata.metadata.initiativeId === 'globalDonation';
      const paymentObject: createDonation = {
        TransactionId: paymentEventMetadata.id,
        userId: paymentEventMetadata.metadata.userId,
        amount: paymentEventMetadata.amount / 100,
        initiativeID: paymentEventMetadata.metadata.initiativeId,
        isGlobalDonation,
      };
    }
    return stripeEvent;
  }
}
