import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useAppSubmitButtonStyles = makeStyles((theme: any) => ({
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  button: {
    transition: '.3s',
    height: 60,
    borderRadius: '60px',
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
    color: 'white',
    width: '100%',
    background: theme.palette.primary.main,
    border: 'none',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      boxShadow: theme.shadow.main,
    },
  },
}));
