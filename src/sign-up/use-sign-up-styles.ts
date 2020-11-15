import { makeStyles, Theme } from '@material-ui/core/styles';

export const useSignUpStyles = makeStyles((theme: Theme) => ({
  formWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 400,
  },
  form: {
    paddingTop: '20px',
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  socialButtons: {
    width: '100%',
    marginTop: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  links: {
    marginBottom: 20,
    marginTop: 20,
  },
  copy: {
    marginTop: theme.spacing(0.5),
  },
}));
