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
    paddingTop: 100,
  },
  desktopSlideImages: {},
  desktopSlideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  photoTypeTitle: {
    marginTop: 70,
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
}));
