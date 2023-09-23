import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Session {
  id: string;
  expires: Date;
  session: SessionInfo;
  userId: string;
}

export class SessionInfo {
  user: UserSession;
  sessionId: string;
}

export class UserSession {
  userId: string;
}

export const AuthSchema = SchemaFactory.createForClass(Session);