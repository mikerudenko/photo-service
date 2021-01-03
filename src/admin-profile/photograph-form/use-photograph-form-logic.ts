import { useAutoCallback } from 'hooks.macro';
import {
  Photograph,
  uploadPhotographPicture,
  updatePhotograph,
} from '../../api';
import { getFileExtension } from '../../services/helpers-service';
import { LOCALE } from '../../app.constants';
import type { Photo } from '../../api';
import get from 'lodash/get';

export const usePhotographFormLogic = (photographId: string) => {
  const onSubmit = useAutoCallback(async (photograph: Photograph) => {
    let { backgroundImage, avatar, photos } = photograph;
    const backgroundImageFile = get(photograph, 'backgroundImage');
    const avatarImageFile = get(photograph, 'avatar');
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
        image: avatarImageFile,
        path: `avatar-{${getFileExtension(avatarImageFile)}}`,
      });
    }

    const photoSrcPromises = await Promise.all(
      (photos as Photo[]).map(async ({ src }: Photo, index) => {
        return src instanceof File
          ? uploadPhotographPicture({
              photographId,
              image: src,
              path: `photo-${index}-${src.name.split('.').pop()}`,
            })
          : src;
      }),
    );

    photos = photoSrcPromises.map((src, index) => ({
      src,
      photoType: photos[index].photoType,
    }));

    await updatePhotograph({
      ...photograph,
      prices: photograph.prices.map(({ fee, photoType, price }) => ({
        fee: Number(fee),
        photoType,
        price: Number(price),
      })),
      translations: Object.keys(LOCALE).map((language: any, index) => ({
        ...photograph.translations[index],
        language,
      })),
      id: photographId,
      backgroundImage,
      avatar,
      photos,
    });
  });

  return { onSubmit };
};
