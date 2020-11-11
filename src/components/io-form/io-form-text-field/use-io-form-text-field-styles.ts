import { makeStyles } from '@material-ui/core/styles';

export const useIOFormTextFieldStyles = makeStyles((theme:any) => ({
  formControl: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    marginBottom: 0,
  },
  root: {
    position: 'relative',
    color: theme.color.mainDisabled,
    width: '100%',
    '& label': {
      color: theme.color.mainDisabled,
      'font-weight': '500',
      'font-size': '18px',
      'line-height': '23px',
    },
    '&:hover': {
      '& .icon': {
        background: 'none',
      },
      '& label': {
        color: theme.color.main,
      },
    },
    '& label.Mui-focused, & label.MuiFormLabel-filled': {
      color: theme.color.mainDisabled,
      'font-weight': 'bold',
      'font-size': '11px',
      'line-height': '18px',
      'letter-spacing': '0.05em',
      'text-transform': 'uppercase',
    },
    '& label.MuiFormLabel-filled + .MuiInput-underline': {
      '&:before': {
        borderBottomColor: theme.color.mainLight,
      },
    },
    '& label.MuiFormLabel-filled + .icon': {
      '&:before': {
        borderBottomColor: theme.color.mainLightThin,
      },
    },
    '& label.Mui-focused + .icon': {
      '&:before': {
        borderBottomColor: theme.color.mainLight,
      },
    },
    '& input': {
      color: theme.color.blackSecondary,
      padding: '6px 0 10px 0',
      'font-weight': '500',
      'font-size': '18px',
      'line-height': '24px',
    },
    '& .MuiInput-underline': {
      '&:after': {
        borderBottomColor: theme.color.mainLight,
      },
      '&:before': {
        borderBottom: `2px solid ${theme.color.backgroundDisabled}`,
      },
      '&:hover:before': {
        borderBottomColor: theme.color.backgroundDisabled,
      },
    },
    '& .icon': {
      background: theme.color.mainLightThin,
      position: 'relative',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      '& svg': {
        position: 'absolute',
        width: '20px',
        height: '20px',
        margin: 'auto',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
      },
    },
    '& .link': {
      position: 'absolute',
      right: 0,
    },
  }
}));
