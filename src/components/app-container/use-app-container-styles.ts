import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useAppContainerStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: '100vh',
    },
    containerContent: {
      paddingTop: 20,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);
