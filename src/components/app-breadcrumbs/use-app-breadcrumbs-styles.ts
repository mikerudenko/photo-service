import { makeStyles } from '@material-ui/core/styles';

export const useAppBreadcrumbsStyles = makeStyles({
  breadcrumbsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  breadcrumb: {
    paddingRight: 20,
    marginRight: 10,
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
    },
    '&:not(:last-child):before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: 10,
      right: 0,
      height: 1,
      top: '50%',
      background: 'black',
      transform: 'translateY(-50%)',
    },
  },
});
