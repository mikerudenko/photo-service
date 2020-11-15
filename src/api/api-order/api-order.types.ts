import { PhotographPrice } from '../api-photograph';
import { User } from '../api-auth';

export enum OrderStatus {
  payed = 'payed',
  verified = 'verified',
  completed = 'completed',
  rejected = 'rejected',
}

export type OrderPhotographInfo = {
  id: string;
  name: string;
};

export type Order = {
  id: string;
  price: PhotographPrice;
  photograph: OrderPhotographInfo;
  date: string;
  status: OrderStatus;
  user: User;
};

export type OrderParams = Partial<{
  status: OrderStatus;
}>;
