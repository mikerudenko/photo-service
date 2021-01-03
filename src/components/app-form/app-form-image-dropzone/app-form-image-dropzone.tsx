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
  multiple = false,
  ...rest
}: IFileInputProps) => {
  const classes = useAppDropzoneImageStyles();
  const { formatMessage } = useIntl();
  const { register, unregister, setValue, watch } = useFormContext();
  const dropzoneValue: File[] | string[] | string | File = watch(name);
  const onDrop = useAutoCallback((droppedFiles) => {
    const value = multiple ? droppedFiles : droppedFiles[0];
    setValue(name, value, { shouldValidate: true });
  });
  const { getInputProps } = useDropzone({
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
      {dropzoneValue && (
        <div className={classes.imagesContainer}>
          {Array.isArray(dropzoneValue)
            ? // @ts-ignore
              dropzoneValue.map(renderImage)
            : renderImage(dropzoneValue)}
        </div>
      )}
    </div>
  );
};
