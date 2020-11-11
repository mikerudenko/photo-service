import { makeStyles } from '@material-ui/core/styles';
import { IOFormSecurityLevelColorType } from './io-form-security-level.constants';

export type UseIOFormSecurityLevelStylesProps = {
  progress: number;
  color: IOFormSecurityLevelColorType;
}

export const useIOFormSecurityLevelStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginRight: theme.spacing(2),
  },
  progress: {
    width: 60,
    height: 10,
    borderRadius: 5,
    background: theme.palette.divider,
  },
  indicator: {
    height: '100%',
    borderRadius: 5,
    background: ({ color }: UseIOFormSecurityLevelStylesProps) =>
      theme.palette[color].main,
    width: ({ progress }: UseIOFormSecurityLevelStylesProps) => `${progress}%`,
    transition: 'width 300ms ease-in-out'
  },
}));
