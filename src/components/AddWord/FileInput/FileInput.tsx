import React, { ChangeEvent, FC } from 'react';
import * as S from './styles';

interface IFileInput {
  setFieldValue: (field: string, value: any) => void;
}

const FileInput: FC<IFileInput> = ({ setFieldValue }) => {
  const setFileNameToFormValues = (
    inputData: ChangeEvent<HTMLInputElement>,
  ): void => {
    if (inputData.target?.files) {
      const [file] = inputData.target.files;
      setFieldValue('imageSrc', file);
    }
  };

  return (
    <>
      <S.Input
        id="imageSrc"
        name="imageSrc"
        type="file"
        onChange={setFileNameToFormValues}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="imageSrc">Download</label>
    </>
  );
};

export { FileInput };
