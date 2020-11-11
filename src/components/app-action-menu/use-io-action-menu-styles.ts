import { makeStyles } from '@material-ui/core/styles';

export const useIOActionMenuStyles = makeStyles((theme: any) => ({
  actionMenuWrapper: {
    position: 'relative',
    width: 39,
    height: 39,
  },
  actionMenuButton: {
    position: 'relative',
    zIndex: 2,
  },
  actionMenuDropDown: {
    position: 'absolute',
    zIndex: 1,
    top: -10,
    right: -10,
    padding: '30px 25px 30px 25px',
    // TODO put in variables
    boxShadow: `0px 8px 32px rgba(39, 59, 97, 0.08)`,
    borderRadius: 10,
    minWidth: 200,
    background: 'white',
  },
  actionMenuItem: {
    '&:not(:last-child)': {
      borderBottom: `1px solid grey`,
      paddingBottom: 14,
      marginBottom: 10,
    },
    display: 'block',
    width: '100%',
    textAlign: 'left',
  },
}));
