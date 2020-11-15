import { makeStyles } from '@material-ui/styles';

export const useAppFormTextFieldStyles = makeStyles((theme: any) => ({
  input: {
    width: '100%',
    height: 55,
    borderRadius: '55px',
    border: `1px solid ${theme.darkGrey}`,
    paddingLeft: 20,
    marginBottom: 0,
    fontFamily: theme.fontFamily,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 700,
    '&:focus': {
      outline: 'none',
    },
  },
  inputError: {
    borderColor: theme.error,
  },
}));
