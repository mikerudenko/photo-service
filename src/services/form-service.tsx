import get from 'lodash/get';

type HasErrorDTO = {
  errors: any;
  name: string;
  isDirty: boolean;
};

export const hasError = ({ errors, name, isDirty }: HasErrorDTO) => {
  const error = get(errors, name);p
  return {
    error,
    showError: isDirty && !!error,
  };
};
