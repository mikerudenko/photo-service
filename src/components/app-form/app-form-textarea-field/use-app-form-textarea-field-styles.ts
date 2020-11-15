import { makeStyles } from '@material-ui/styles';

export const useAppFormTextareaFieldStyles = makeStyles((theme: any) => ({
  textarea: {
    width: '100%',
    height: 300,
    borderRadius: '35px',
    border: `1px solid ${theme.darkGrey}`,
    paddingLeft: 20,
    marginBottom: 0,
    fontFamily: theme.fontFamily,
    fontSize: '14px',
    lineHeight: '55px',
    fontWeight: 700,
    resize: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  textareaError: {
    borderColor: theme.error,
  },
}));
