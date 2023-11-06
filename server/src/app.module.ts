import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { InitiativesModule } from './initiatives/initiatives.module';
import { AuthModule } from './auth/auth.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PostsModule } from './posts/posts.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    InitiativesModule,
    AuthModule,
    ReviewsModule,
    PostsModule,
    StripeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'users/(.*)', method: RequestMethod.GET }, 'users')
      .forRoutes('users');
    //EXCEPCION EN POST, GET, GET ID
    //APLICADO A USERS EN PUT, DELETE
  }
}
