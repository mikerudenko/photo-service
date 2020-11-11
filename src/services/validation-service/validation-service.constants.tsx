import { validationServiceMessages } from './validation-service.messages';
import Joi from 'joi';
import { MessageDescriptor } from 'react-intl';

export const VALIDATION_PATTERNS = {
  // Todo remove
  creditCardRegexp: /^(?:3[47][0-9]{13})$/,
  phoneRegexp: /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
};

export const VALIDATION_STRATEGIES = {
  required: Joi.any().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required(),
  creditCard: Joi.string().creditCard(),
  phone: Joi.string().pattern(VALIDATION_PATTERNS.phoneRegexp, 'numbers'),
  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .options({ messages: { 'any.only': '{{#label}} does not match' } }),
};

export const validationMessages: Record<string, MessageDescriptor> = {
  required: validationServiceMessages.requiredField,
  email: validationServiceMessages.invalidEmail,
  confirmPassword: validationServiceMessages.passwordDidNotMatch,
};
