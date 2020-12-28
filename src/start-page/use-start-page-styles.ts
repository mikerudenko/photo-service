import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStartPageStyles = makeStyles((theme: Theme) => ({
  startPageContainer: {},
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
  desktopSlide: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: 'calc(100vh - 200px)',
  },
  desktopSlideInfo: {
    paddingTop: 20,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      textAlign: 'center',
    },
  },
  desktopSlideImages: {},
  desktopSlideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '77%',
    },
  },
  photoTypeTitle: {
    marginTop: 30,
    marginBottom: 30,
  },
  desktopSliderNavigationContainer: {
    marginTop: 20,
    borderTop: '1px solid black',
    paddingBottom: 20,
    display: 'flex',
    flexWrap: 'wrap',
  },
  desktopSliderNavigationItem: {
    textTransform: 'capitalize',
    cursor: 'pointer',
    paddingTop: 30,
    position: 'relative',
    transition: '.2s',
    marginRight: 70,
    '&:hover': {
      color: 'rgba(0,0,0,.6)',
    },
    '&:before': {
      content: '""',
      height: 28,
      width: 1,
      display: 'block',
      backgroundColor: 'black',
      position: 'absolute',
      top: 0,
      left: '50%',
    },
  },
  mobileNavigationContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  selectPhotographButton: {
    marginTop: 20,
    maxWidth: 350,
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      margin: '20px auto',
    },
  },
  quote: {
    textAlign: 'right',
    paddingBottom: 20,
    borderBottom: '1px solid black',
    marginBottom: 20,
    marginTop: 50,
  },
}));
