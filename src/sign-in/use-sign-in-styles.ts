import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useSignInStyles = makeStyles((theme: Theme) => ({
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
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  signInLink: {
    marginBottom: 5,
  },
  copy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
}));
