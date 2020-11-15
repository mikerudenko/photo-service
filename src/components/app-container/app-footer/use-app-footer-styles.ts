import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useAppFooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      marginTop: 'auto',
    },
    mainSectionWrapper: {
      paddingTop: '15px',
      backgroundColor: theme.palette.secondary.main,
      paddingBottom: '15px',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '20px',
        paddingBottom: '20px',
      },
    },
    mainSection: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    bottomNav: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    bottomNavItem: {
      color: 'white',
      fontSize: '16px',
      textDecoration: 'none',
      marginBottom: '16px',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    bottomNavColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    rightFooterSection: {
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
      },
    },
    cardSponsors: {
      width: '90px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    copyright: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    copyrightText: {
      fontSize: '14px',
      color: 'white',
      marginRight: 20,
    },
    footerLogoWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);
