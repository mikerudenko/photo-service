import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useAppContainerStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    containerContent: {
      paddingTop: 50,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);
