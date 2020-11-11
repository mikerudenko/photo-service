import { makeStyles } from '@material-ui/core/styles';

export const useIOTableStyles = makeStyles((theme: any) => ({
  root: {
    overflowX: 'auto',
    background: 'white',
    flexGrow: 1,
  },
  tableLayoutFixed: {
    tableLayout: 'fixed',
  },
  table: {
    color: theme.palette.primary.main,
    borderCollapse: 'collapse',
    minWidth: '100%',
  },
  thead: {
    border: 'none',
  },
  tbody: {
    border: 'none',
  },
  bodyTr: {
    '& td:first-child': {
      'border-top-left-radius': '10px',
      'border-bottom-left-radius': '10px',
    },
    '& td:last-child': {
      'border-top-right-radius': '10px',
      'border-bottom-right-radius': '10px',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  strippedRow: {
    '&:nth-child(odd)': {
      background: '#FAFAFB',
    },
    '&:nth-child(even)': {
      background: 'white',
    },
  },
  tr: {},
  td: {
    padding: 15,
    minWidth: '120px',
  },
  th: {
    padding: 15,
    textAlign: 'left',
    minWidth: '120px',
  },
  emptyCell: {
    height: 50,
    position: 'relative',
  },
  columnFilterPopoverContent: {
    padding: 40,
  },
  columnFilterCheckboxField: {
    marginBottom: 22,
  },
  tableColumnFilterPopover: {
    width: 280,
    marginTop: 35,
  },
  columnFilterDivider: {
    height: 1,
    backgroundColor: 'grey',
  },
  columnFilterSelectAll: {
    marginTop: 25,
    display: 'block',
  },
  columnFilterTitle: {
    marginBottom: 20,
    display: 'block',
    color: 'grey',
  },
  tableControls: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  viewControlsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70,
  },
  editColumnButton: {
    marginLeft: 20,
  },
  viewControl: {
    width: 30,
    height: 30,
    borderRadius: 10,
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    cursor: 'pointer',
  },
  theadCellLabel: {
    position: 'relative',
    paddingRight: 15,
  },
}));
