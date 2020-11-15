import { makeStyles } from '@material-ui/core/styles';

export const useAppLinkStyles = makeStyles((theme: any) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
