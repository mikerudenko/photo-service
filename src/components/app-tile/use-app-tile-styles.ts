import { makeStyles } from '@material-ui/core/styles';

export const useAppTileStyles = makeStyles((theme) => ({
  tile: {
    padding: 40,
    borderRadius: 30,
    boxShadow: '0px 32px 64px rgba(28, 37, 44, 0.08)',
    [theme.breakpoints.only('md')]: {
      padding: 30,
    },
    [theme.breakpoints.only('sm')]: {
      padding: 20,
    },
  },
}));
