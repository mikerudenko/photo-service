import React, { memo } from 'react';
import { AppTable } from '../../components/app-table';
import { useAutoMemo } from 'hooks.macro';
import { globalMessages } from '../../app-global.messages';
import { ROUTES } from '../../app.constants';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useGetPhotographList, PhotographTranslation } from '../../api';
import { getLocale } from '../../services/intl-service';

export const PhotographsTable = memo(() => {
  const { formatMessage } = useIntl();
  const { photographs, photographsLoading } = useGetPhotographList();
  const locale = getLocale();

  const columns = useAutoMemo(() => [
    {
      dataField: 'translations',
      label: formatMessage(globalMessages.name),
      formatter: (translations: PhotographTranslation[], { id }: any) => {
        const { name } =
          translations.find(({ language }) => language === locale) ||
          translations[0];
        return (
          <Link to={`${ROUTES.photographs}/${id}/${ROUTES.edit}`}>{name}</Link>
        );
      },
    },
  ]);

  return (
    <AppTable
      {...{
        columns,
        data: photographs,
        loading: photographsLoading,
        id: 'photographs',
      }}
    />
  );
});
