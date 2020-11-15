import { useAutoCallback } from 'hooks.macro';
import {
  Photograph,
  uploadPhotographPicture,
  uploadPhotographPictures,
  updatePhotograph,
} from '../../api';
import { getFileExtension } from '../../services/helpers-service';
import get from 'lodash/get';

export const usePhotographFormLogic = (photographId: string) => {
  const onSubmit = useAutoCallback(async (photograph: Photograph) => {
    let { backgroundImage, avatar, photos } = photograph;
    const backgroundImageFile = get(photograph, 'backgroundImage[0]');
    const avatarImageFile = get(photograph, 'avatar[0]');
    const photosFile = get(photograph, 'photos[0]');
    if (backgroundImageFile instanceof File) {
      backgroundImage = await uploadPhotographPicture({
        photographId,
        image: backgroundImageFile,
        path: `background-{${getFileExtension(backgroundImageFile)}}`,
      });
    }
    if (avatarImageFile instanceof File) {
      avatar = await uploadPhotographPicture({
        photographId,
        image: backgroundImageFile,
        path: `avatar-{${getFileExtension(avatarImageFile)}}`,
      });
    }
    if (photosFile instanceof File) {
      photos = await uploadPhotographPictures(
        photographId,
        photograph.photos as File[],
      );
    }

    await updatePhotograph({
      ...photograph,
      prices: photograph.prices.map(({ fee, photoType, price }) => ({
        fee: Number(fee),
        photoType,
        price: Number(price),
      })),
      id: photographId,
      backgroundImage,
      avatar,
      photos,
    });
  });

  return { onSubmit };
};
