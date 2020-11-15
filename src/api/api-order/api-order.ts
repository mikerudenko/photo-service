import { useQuery, useMutation } from 'react-query';
import { RESOURCE_MAP } from '../api.constants';
import { firebaseFirestore } from '../../services/firebase-service';
import { transformServerListPayload } from '../transform-server-payload';
import { Order, OrderParams, OrderStatus } from './api-order.types';
import { AppQueryCache } from '../../components/query-cache-provider/query-cache-provider';

//TODO add pagination and filtering

export const getOrders = (_: string, params?: OrderParams) => {
  let query = firebaseFirestore.collection('orders');
  if (params?.status) {
    // @ts-ignore
    query = query.where('status', '==', params.status);
  }
  return query.get();
};

export const useGetOrderList = (params?: OrderParams) => {
  const { data, isLoading } = useQuery(
    [RESOURCE_MAP.orders, params],
    getOrders,
  );

  return {
    //@ts-ignore
    orders: data ? (transformServerListPayload<Order>(data) as any[]) : [],
    ordersLoading: isLoading,
  };
};

export const updateOrder = ({ id, ...rest }: Order) =>
  firebaseFirestore
    .collection('orders')
    .doc(id as string)
    .set(rest, { merge: true });

const invalidateOrders = () => {
  Object.keys(OrderStatus).forEach((status) => {
    AppQueryCache.invalidateQueries([RESOURCE_MAP.orders, { status }]);
  });
};

export const useUpdateOrder = (params?: OrderParams) =>
  useMutation(updateOrder, {
    onSuccess: invalidateOrders,
  })[0];
