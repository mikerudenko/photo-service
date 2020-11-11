export const SECURITY_LEVEL_PATTERN = [
  /[A-Z]/g,
  /[a-z]/g,
  /[0-9]/g,
  /(?=.*[\^$*.[\]{}()?\-“!@#%&/,><’:;|_~\\`])\S/g,
];

export enum IOFormSecurityLevelColorType {
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

export const SECURITY_LEVEL_COLOR = {
  0: IOFormSecurityLevelColorType.error,
  25: IOFormSecurityLevelColorType.error,
  50: IOFormSecurityLevelColorType.warning,
  75: IOFormSecurityLevelColorType.success,
  100: IOFormSecurityLevelColorType.info,
}
