import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useAppSubmitButtonStyles = makeStyles({
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
    width: '100%',
  },
});
