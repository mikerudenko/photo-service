import { makeStyles } from '@material-ui/core/styles';

export const useAppFormFieldErrorStyles = makeStyles((theme: any) => ({
  stub: {
    display: 'block',
    width: '100%',
    height: 25,
    paddingTop: 2,
    marginBottom: 5,
  },
  error: {
    marginTop: 0,
    paddingLeft: 10,
    height: 25,
    paddingTop: 2,
    marginBottom: 5,
    color: theme.error,
  },
}));
