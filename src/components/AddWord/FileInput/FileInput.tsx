import React, { ChangeEvent, FC } from 'react';
import { Upload, Icon } from 'antd';
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
      <Upload.Dragger>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <S.Input
          id="imageSrc"
          name="imageSrc"
          type="file"
          onChange={setFileNameToFormValues}
        />
        <label htmlFor="imageSrc">Upload an image</label>
      </Upload.Dragger>
      <br/>
    </>
  );
};

export { FileInput };
