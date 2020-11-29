import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStartPageStyles = makeStyles((theme: Theme) => ({
  startPageContainer: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    textAlign: 'center',
  },
  image: {
    marginTop: 'auto',
    marginLeft: 'auto',
    width: 400,
  },
  subtitle: {},
  tiles: {},
  tile: {},
}));
