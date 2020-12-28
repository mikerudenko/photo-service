import { makeStyles } from '@material-ui/core/styles';

export const useAppButtonStyles = makeStyles((theme: any) => ({
  button: {
    position: 'relative',
    width: '100%',
    display: 'block',
    height: 50,
    lineHeight: '29px',
    cursor: 'pointer',
    fontSize: 24,
    fontFamily: theme.fontFamily,
    fontWeight: 700,
    border: '2px solid black',
    backgroundColor: 'black',
    color: 'white',
    transition: '.2s',
  },
  hovered: {
    backgroundColor: 'white',
    color: 'black',
  },
}));
