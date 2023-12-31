import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local/local.strategy';
import { AuthController } from './auth.controller';
import { LocalSerializer } from './local/local.serializer';
import { UuidService } from 'src/uuid/uuid.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, AuthSchema } from './entities/auth.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Session.name, schema: AuthSchema }]), UsersModule, PassportModule],
  providers: [
    AuthService,
    LocalStrategy,
    LocalSerializer,
    UuidService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
