import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SERVER_ERROR_CODES, authMessages } from '../api';
import { createValidationResolver } from '../services/validation-service';
import { VALIDATION_STRATEGIES } from '../services/validation-service';
// import Joi from 'joi';

// import { joiResolver } from '@hookform/resolvers/joi';

export type SignInValues = {
  email: string;
  password: string;
};

export const validationResolver = createValidationResolver({
  email: VALIDATION_STRATEGIES.email,
  password: VALIDATION_STRATEGIES.password,
});

export const resolveServerError = (error: any) => {
  if (error.code === SERVER_ERROR_CODES.wrongPassword) {
    return [
      'password',
      { message: <FormattedMessage {...authMessages.wrongPassword} /> },
    ];
  }

  return ['password', { message: 'unknown error' }];
};
