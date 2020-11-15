import { makeStyles } from '@material-ui/core/styles';

export const useAppTypographyStyles = makeStyles((theme: any) => {
  const baseStyles = {
    padding: 0,
    margin: 0,
  };

  return {
    h1: {
      fontFamily: theme.fontFamily,
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '43px',
      ...baseStyles,
    },
    h2: {
      fontFamily: theme.fontFamily,
      fontWeight: 700,
      fontSize: '26px',
      lineHeight: '31px',
      ...baseStyles,
    },
    h3: {
      fontFamily: theme.fontFamily,
      fontWeight: 500,
      fontSize: '20',
      lineHeight: '24px',
      ...baseStyles,
    },
    h4: {
      fontFamily: theme.fontFamily,
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '21px',
      ...baseStyles,
    },
    p: {
      fontFamily: theme.fontFamily,
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      ...baseStyles,
    },
    buttonText: {
      fontFamily: theme.fontFamily,
      fontSize: '18px',
      lineHeight: '120%',
      fontWeight: 700,
    },
  };
});
