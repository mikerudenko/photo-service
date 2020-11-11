import { makeStyles, Theme } from '@material-ui/core/styles';
import { THEME_VARIABLES } from '../../Themes/app-global.styles';

export const useIOFormSelectFieldStyles = makeStyles((theme: Theme) => ({
  formControl: {
    '&:hover .MuiInputLabel-formControl': {
      color: theme.palette.primary.main,
    },
    '&:hover .MuiSelect-icon path': {
      fill: theme.palette.primary.main,
    }
  },
  select: {
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  popover: {
    '& .MuiPopover-paper': {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },
    '& .MuiMenu-list': {
      padding: 0,
    },
  },
  menuItem: {
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    padding:
      `var(${THEME_VARIABLES.selectMenuItemPaddingVertical})
      var(${THEME_VARIABLES.selectMenuItemPaddingHorizontal})`,
    transition: 'all 300ms ease-in-out',
    '&:not(:last-child)': {
      borderBottom: `2px solid ${theme.palette.divider}`,
    },
    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
      borderBottom: `2px solid ${theme.palette.primary.light}`,
    },
    '& svg': {
      display: 'none',
    },
    '&.Mui-selected svg': {
      display: 'block',
    },
  },
  multipleActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding:
      `var(${THEME_VARIABLES.selectMenuItemPaddingVertical})
      var(${THEME_VARIABLES.selectMenuItemPaddingHorizontal})`,
  }
}));
