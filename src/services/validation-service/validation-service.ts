import Joi from 'joi';
import { validationMessages } from './validation-service.constants';

export const createValidationResolver = (validationSchema: any) => (
  data: Record<string, string>,
) => {
  const { error, value: values } = Joi.object(validationSchema).validate(data);

  return {
    values: error ? {} : values,
    errors: error
      ? error.details.reduce((previous: any, currentError: any) => {
          return {
            ...previous,
            [currentError.path[0]]:
              validationMessages[currentError.path[0] as string],
          };
        }, {})
      : {},
  };
};
