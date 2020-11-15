import { AppSpinner } from 'components/app-spinner';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Photograph, useGetPhotographById } from '../../api';
import { PhotographForm } from '../photograph-form';

export const EditPhotograph = memo(() => {
  const { id }: { id: string } = useParams();
  const { photograph, photographLoading } = useGetPhotographById(id);
  if (photographLoading || !photograph) {
    return <AppSpinner absoluteCentered />;
  }

  return (
    <>
      <PhotographForm defaultValues={photograph as Photograph} />
    </>
  );
});
