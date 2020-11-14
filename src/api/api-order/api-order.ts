import { useQuery } from 'react-query';
import { RESOURCE_MAP } from '../api.constants';
import { firebaseFirestore } from '../../services/firebase-service';
import { transformServerListPayload } from '../transform-server-payload';
import { Order } from './api-order.types';

//TODO add pagination and filtering

export const getOrders = () => firebaseFirestore.collection('orders').get();

export const useGetOrderList = () => {
  const { data, isLoading } = useQuery([RESOURCE_MAP.orders], getOrders);

  return {
    //@ts-ignore
    orders: data ? (transformServerListPayload<Order>(data) as any[]) : [],
    ordersLoading: isLoading,
  };
};
