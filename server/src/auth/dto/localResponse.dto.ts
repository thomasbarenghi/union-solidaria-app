export class User {
  id: number;
  email: string;
  provider: string;
}

export class LocalResponseDto {
  sessionId: string;
  user: User;
}
