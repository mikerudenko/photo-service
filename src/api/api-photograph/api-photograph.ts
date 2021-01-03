import { useQuery } from 'react-query';
import {
  firebaseFirestore,
  firebaseStorage,
} from '../../services/firebase-service';
import { RESOURCE_MAP } from '../api.constants';
import { transformServerListPayload } from '../transform-server-payload';
import { Photograph } from './api-photograph.types';

type UpdateImageParams = {
  photographId: string;
  image: File;
  path: string;
};

export const uploadPhotographPicture = async ({
  photographId,
  image,
  path,
}: UpdateImageParams): Promise<string> => {
  const lakeImageRef = firebaseStorage
    .ref()
    .child(`photographs/${photographId}/${path}`);
  await lakeImageRef.put(image);
  return await lakeImageRef.getDownloadURL();
};

export const deletePhotographPicture = (url: string) =>
  firebaseStorage.refFromURL(url).delete();

export const deletePhotographPictures = (urls: string[]) =>
  urls.map((url) => deletePhotographPicture(url));

//TODO add pagination and filtering
export const getPhotographs = () =>
  firebaseFirestore.collection('photographs').get();

export const getPhotographById = (_: string, id: string) =>
  firebaseFirestore.collection('photographs').doc(id).get();

export const updatePhotograph = ({ id, ...rest }: Photograph) => {
  firebaseFirestore
    .collection('photographs')
    .doc(id)
    .set(rest, { merge: true });
};

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

export const useGetPhotographById = (id: string) => {
  const { data, isLoading } = useQuery(
    [RESOURCE_MAP.photographs, id],
    getPhotographById,
  );

  return {
    // @ts-ignore
    photograph: data?.data ? { ...data?.data(), id } : null,
    photographLoading: isLoading,
  };
};
