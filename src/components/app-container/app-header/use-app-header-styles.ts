import { makeStyles } from '@material-ui/core/styles';

export const useAppHeaderStyles = makeStyles((theme: any) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadow.main,
    height: 100,
    padding: 20,
  },
}));
