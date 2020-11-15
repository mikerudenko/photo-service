import Tooltip from '@material-ui/core/Tooltip';
import c from 'classnames';
import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { LOCALE_SELECT_LIST } from '../../../../app.constants';
import { useRootContext } from '../../../../root/root.context';
import { useLanguageTalesListStyles } from './use-language-tale-list-styles';

export const LanguageTaleList = memo(() => {
  const { formatMessage } = useIntl();
  const classes = useLanguageTalesListStyles();
  const { setLocale, locale } = useRootContext();
  const onLocaleClick = useAutoCallback((event: any) => {
    setLocale(event.target.dataset.value);
  });

  return (
    <div className={classes.tales}>
      {LOCALE_SELECT_LIST.map(({ label, value }, key) => (
        <Tooltip title={formatMessage(label)} key={key}>
          <div
            className={c(classes.languageTale, {
              [classes.selected]: locale === value,
            })}
            data-value={value}
            onClick={onLocaleClick}
          >
            {value}
          </div>
        </Tooltip>
      ))}
    </div>
  );
});
