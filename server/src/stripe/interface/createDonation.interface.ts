import { Donation } from '../entities/donation.entity';

export type createDonation = Omit<Donation, 'id' | 'createdAt'>;
