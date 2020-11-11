import { makeStyles } from '@material-ui/core/styles';

export const useIOFormFieldErrorStyles = makeStyles((theme: any) => ({
  stub: {
    display: 'block',
    width: '100%',
    height: 25,
    paddingTop: 2,
  },
  error: {
    marginTop: 0,
    height: 25,
    paddingTop: 2,
    color: 'red',
  },
}));
