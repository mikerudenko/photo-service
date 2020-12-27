import c from 'classnames';
import { useAutoCallback, useAutoEffect } from 'hooks.macro';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { globalMessages } from '../../../app-global.messages';
import { AppTypography } from '../../app-typography';
import { useAppDropzoneImageStyles } from './use-app-dropzone-image-styles';

interface IFileInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  imageClassName?: string;
  multiple?: boolean;
}

export const AppFormImageDropzone = ({
  name,
  accept,
  label = name,
  imageClassName,
  ...rest
}: IFileInputProps) => {
  const classes = useAppDropzoneImageStyles();
  const { formatMessage } = useIntl();
  const { register, unregister, setValue, watch } = useFormContext();
  const files: File[] | string[] | string = watch(name);
  const onDrop = useAutoCallback((droppedFiles) => {
    setValue(name, droppedFiles, { shouldValidate: true });
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept,
  });

  const renderImage = useAutoCallback((file: File | string) => (
    <img
      className={c(classes.image, imageClassName)}
      src={typeof file === 'string' ? file : URL.createObjectURL(file)}
      alt=''
    />
  ));

  useAutoEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  });

  return (
    <div className={classes.dropzone}>
      <AppTypography variant='body' className={classes.title}>
        {label}
      </AppTypography>
      <label htmlFor={name} className={classes.label}>
        {formatMessage(globalMessages.selectImages)}
      </label>
      <input
        {...{
          name,
          accept,
          label,
          ...rest,
        }}
        id={name}
        className={classes.fileInput}
        {...getInputProps()}
      />
      {!!files?.length && (
        <div className={classes.imagesContainer}>
          {/* @ts-ignore */}
          {Array.isArray(files) ? files.map(renderImage) : renderImage(files)}
        </div>
      )}
    </div>
  );
};
