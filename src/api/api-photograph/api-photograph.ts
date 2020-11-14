import { useQuery } from 'react-query';
import { RESOURCE_MAP } from '../api.constants';
import { firebaseFirestore } from '../../services/firebase-service';
import { transformServerListPayload } from '../transform-server-payload';
import { Photograph } from './api-photograph.types';

//TODO add pagination and filtering

export const getPhotographs = () =>
  firebaseFirestore.collection('photographs').get();

export const useGetPhotographList = () => {
  const { data, isLoading } = useQuery(
    [RESOURCE_MAP.photographs],
    getPhotographs,
  );

  return {
    photographs: data
      ? //@ts-ignore
        (transformServerListPayload<Photograph>(data) as any[])
      : [],
    photographsLoading: isLoading,
  };
};
