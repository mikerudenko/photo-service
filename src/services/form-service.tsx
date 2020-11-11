import get from 'lodash/get';

type HasErrorDTO = {
  errors: any;
  name: string;
  dirty: boolean;
};

export const hasError = ({ errors, name, dirty }: HasErrorDTO) => {
  const error = get(errors, name);
  return {
    error,
    showError: dirty && !!error,
  };
};
