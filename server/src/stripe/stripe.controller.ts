import {
  Controller,
  Post,
  Body,
  Headers,
  Req,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateStripeIntentDto } from './dto/stripe-intent.dto';
import RequestWithRawBody from './interface/requestWithRawBody.interface';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}
  @Post('create-checkout-session')
  async createPaymentIntent(@Body() createStripeIntent: CreateStripeIntentDto) {
    try {
      const sessionUrl = await this.stripeService.createPaymentIntent(
        createStripeIntent,
      );
      return { sessionUrl, message: 'Session payment create successful' };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof ConflictException
      ) {
        throw error;
      } else {
        throw new BadRequestException('Something bad happened', {
          cause: error,
        });
      }
    }
  }

  @Post('webhook')
  async stripeWebHook(
    @Headers('stripe-signature') signature: string,
    @Req() request: RequestWithRawBody,
  ) {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }
    await this.stripeService.stripeWebHook(signature, request.rawBody);
    return null;
  }
}
