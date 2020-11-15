import { makeStyles } from '@material-ui/core/styles';

export const useAppModalStyles = makeStyles({
  modal: {
    background: '#FFFFFF',
    boxShadow: '0px 8px 32px rgba(39, 59, 97, 0.08)',
    borderRadius: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 420,
    padding: 40,
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
  },
  close: {
    position: 'absolute',
    width: 9,
    top: 15,
    right: 15,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
