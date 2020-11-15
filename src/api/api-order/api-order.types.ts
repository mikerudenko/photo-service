import { PhotographPrice } from '../api-photograph';
import { User } from '../api-auth';
import { globalMessages } from '../../app-global.messages';

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

export const ORDER_STATUS_SELECT_LIST = [
  {
    value: OrderStatus.payed,
    label: globalMessages.payed,
  },
  {
    value: OrderStatus.verified,
    label: globalMessages.verified,
  },
  {
    value: OrderStatus.completed,
    label: globalMessages.completed,
  },
  {
    value: OrderStatus.rejected,
    label: globalMessages.rejected,
  },
];
