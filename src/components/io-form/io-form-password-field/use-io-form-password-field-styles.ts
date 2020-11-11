import { makeStyles } from '@material-ui/core/styles';

export const useIOFormPasswordFieldStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  securityLevel: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
