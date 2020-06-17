import React, { ChangeEvent, FC } from 'react';
import * as S from './styles';

interface IFileInput {
  setFieldValue: (field: string, value: any) => void;
}

const FileInput: FC<IFileInput> = ({ setFieldValue }) => {
  const setFileToForm = (inputData: ChangeEvent<HTMLInputElement>): void => {
    if (inputData.target?.files) {
      const [file] = inputData.target.files;
      setFieldValue('imageSrc', file);
    }
  };

  return (
    <>
      <S.Input
        type="file"
        id="imageSrc"
        name="imageSrc"
        onChange={setFileToForm}
      />
      <label htmlFor="imageSrc">
        <S.PlusIcon type="plus" />
        <span>Upload an image</span>
      </label>
    </>
  );
};

export { FileInput };
