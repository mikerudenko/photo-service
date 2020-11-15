import { makeStyles } from '@material-ui/core/styles';

export const useAppTabsStyles = makeStyles((theme: any) => ({
  wrapper: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none',
  },
  linkActive: {
    color: theme.palette.primary.main,
  },
  tabsRoot: {},
  tabText: {
    color: 'black',
  },
  activeTabText: {
    color: theme.palette.primary.main,
  },
  indicator: {
    backgroundColor: theme.palette.primary.main,
  },
  tabRoot: {
    minWidth: 'auto',
    padding: 0,
    marginRight: 60,
  },
  tabContent: {
    paddingTop: 40,
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}));
