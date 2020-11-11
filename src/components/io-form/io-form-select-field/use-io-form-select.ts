import { useCallback, useMemo, useState } from 'react';
import { IOFormSelectOptionProps } from '../io-form.types';

export const useIOFormSelect = (options: IOFormSelectOptionProps[]) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), [open, setOpen]);
  const handleClose = useCallback(() => setOpen(false), [open, setOpen]);

  const renderValue = useCallback((value: unknown) =>
      Array.isArray(value)
        ? value.map(labelForValue).join(', ')
        : labelForValue(value)
    , []);

  const labelForValue = useCallback((value: unknown) => {
    return options.find(o => o.value === value)?.label
  }, [options]);

  return useMemo(() => ({
    open,
    handleOpen,
    handleClose,
    renderValue,
  }), [options, open]);
}
