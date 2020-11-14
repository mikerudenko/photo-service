import { useAutoCallback } from 'hooks.macro';
import { Photograph } from '../../api';

export const usePhotographFormLogic = () => {
  const onSubmit = useAutoCallback((values: Photograph) => {
    console.log(values);
  });

  return { onSubmit };
};
