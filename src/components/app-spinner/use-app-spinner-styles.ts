import { makeStyles } from '@material-ui/core';

export type UseIOSpinnerStylesProps = {
  width: number;
  height: number;
};

export const useAppSpinnerStyles = makeStyles((theme) => ({
  '@keyframes rotator': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(270deg)',
    },
  },
  '@keyframes dash': {
    '0%': {
      strokeDashoffset: 188,
    },
    '50%': {
      strokeDashoffset: 188 / 4,
      transform: 'rotate(135deg)',
    },
    '100%': {
      strokeDashoffset: 188,
      transform: 'rotate(450deg)',
    },
  },
  spinner: {
    top: ({ height }: UseIOSpinnerStylesProps) => `calc(50% - ${height / 2}px)`,
    left: ({ width }: UseIOSpinnerStylesProps) => `calc(50% - ${width / 2}px)`,
    display: 'block',
    width: ({ width }: UseIOSpinnerStylesProps) => `${width}px`,
    height: ({ height }: UseIOSpinnerStylesProps) => `${height}px`,
    animation: '$rotator 1.4s linear infinite',
  },
  spinnerCircle: {
    stroke: `${theme.palette.primary.main}`,
    strokeDasharray: 188,
    strokeDashoffset: 0,
    transformOrigin: 'center',
    animation: '$dash 1.4s ease-in-out infinite',
  },
  absoluteCentered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
