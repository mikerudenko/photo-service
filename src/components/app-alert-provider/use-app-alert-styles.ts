import { makeStyles } from '@material-ui/core';

export const useIOAlertStyles = makeStyles((theme: any) => ({
  alert: {
    borderRadius: '6px',
    padding: '15px 20px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '335px',
  },
  error: {
    color: theme.alert.error.color,
    background: theme.alert.error.background,
  },
  info: {
    color: theme.alert.info.color,
    background: theme.alert.info.background,
  },
  success: {
    color: theme.alert.success.color,
    background: theme.alert.success.background,
  },
  close: {
    width: 9,
    cursor: 'pointer',
    marginLeft: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
