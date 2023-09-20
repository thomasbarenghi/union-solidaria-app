export interface IDonationPayment {
  amount: number;
  userId: string;
  initiativeId: string;
}

export interface IPaymentResponse {
  sessionUrl: string;
  message: string;
}
