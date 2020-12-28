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
      fontSize: '70px',
      lineHeight: '84px',
      ...baseStyles,
      '@media (min-width: 320px)': {
        fontSize: '27px',
        lineHeight: '36px',
      },
      '@media (min-width: 768px)': {
        fontSize: '62px',
        lineHeight: '76px',
      },
      '@media (min-width: 1280px)': {
        fontSize: '66px',
        lineHeight: '80px',
      },
      '@media (min-width: 1920px)': {
        fontSize: '72px',
        lineHeight: '90px',
      },
    },
    body: {
      fontFamily: theme.fontFamily,
      fontWeight: 700,
      fontSize: '30px',
      lineHeight: '36px',
      ...baseStyles,
      '@media (min-width: 320px)': {
        fontSize: '16px',
        lineHeight: '26px',
      },
      '@media (min-width: 768px)': {
        fontSize: '18px',
        lineHeight: '28px',
      },
      '@media (min-width: 1280px)': {
        fontSize: '22px',
        lineHeight: '34px',
      },
      '@media (min-width: 1920px)': {
        fontSize: '24px',
        lineHeight: '36px',
      },
    },
    body2: {
      fontFamily: theme.fontFamily,
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
      '@media (min-width: 320px)': {
        fontSize: '16px',
        lineHeight: '26px',
      },
      '@media (min-width: 768px)': {
        fontSize: '18px',
        lineHeight: '28px',
      },
      '@media (min-width: 1280px)': {
        fontSize: '22px',
        lineHeight: '34px',
      },
      '@media (min-width: 1920px)': {
        fontSize: '24px',
        lineHeight: '36px',
      },
    },
    p: {
      fontFamily: theme.fontFamily,
      fontSize: '24px',
      lineHeight: '27px',
      fontWeight: 300,
      '@media (min-width: 320px)': {
        fontSize: '16px',
        lineHeight: '26px',
      },
      '@media (min-width: 768px)': {
        fontSize: '18px',
        lineHeight: '28px',
      },
      '@media (min-width: 1280px)': {
        fontSize: '22px',
        lineHeight: '34px',
      },
      '@media (min-width: 1920px)': {
        fontSize: '24px',
        lineHeight: '36px',
      },
    },
    italic: {
      fontFamily: theme.fontFamilyItalic,
      fontSize: '34px',
      lineHeight: '37px',
      fontWeight: 300,
    },
    'button-text': {
      fontFamily: theme.fontFamily,
      fontSize: '24px',
      lineHeight: '30px',
      fontWeight: 700,
    },
  };
});
