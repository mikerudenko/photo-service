import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import Tooltip from '@material-ui/core/Tooltip';
import c from 'classnames';
import noop from 'lodash/noop';

import { LOCALE_SELECT_LIST } from '../../../../app.constants';
import { useLanguageTalesListStyles } from './use-language-tale-list-styles';

export const LanguageTaleList = memo(() => {
  const { formatMessage } = useIntl();
  const classes = useLanguageTalesListStyles();
  // TODO add locale service
  // const onLocaleClick = useCallback(
  //   (event: any) => {
  //     ChangeLocale(event.target.dataset.value);
  //   },
  //   [ChangeLocale],
  // );

  return (
    <div className={classes.tales}>
      {LOCALE_SELECT_LIST.map(({ label, value }, key) => (
        <Tooltip title={formatMessage(label)} key={key}>
          <div
            className={c(classes.languageTale, {
              [classes.selected]: 'en' === value,
            })}
            data-value={value}
            onClick={noop}
          >
            {value}
          </div>
        </Tooltip>
      ))}
    </div>
  );
});
