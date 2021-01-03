import { makeStyles } from '@material-ui/styles';

export const useAppDropzoneImageStyles = makeStyles((theme: any) => ({
  image: {
    width: 500,
    height: 500,
    margin: 20,
    objectFit: 'contain',
    objectPosition: 'center',
  },
  dropzone: {
    width: '100%',
    minHeight: 300,
    border: `2px solid ${theme.darkGrey}`,
    boxSizing: 'border-box',
  },
  fileInput: {
    visibility: 'hidden',
  },
  imagesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  label: {
    display: 'block',
    textAlign: 'center',
    marginTop: 20,
    margin: '0 auto',
    paddingBottom: 20,
    cursor: 'pointer',
    transition: '.3s',
    height: 60,
    lineHeight: '60px',
    borderRadius: '60px',
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
    color: 'white',
    width: '30%',
    background: theme.palette.primary.main,
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      boxShadow: theme.shadow.main,
    },
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    textTransform: 'capitalize',
  },
}));
