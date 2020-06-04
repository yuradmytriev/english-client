import React, { FC, ChangeEvent } from 'react';
import { message } from 'antd';
import { WordsSDK } from 'sdk/WordsSDK';
import { IWord } from 'interfaces/IWord';
import * as S from './styles';

const ERROR: { UPLOAD_FILE: string } = {
  UPLOAD_FILE: `Can't upload file`,
};

export const UpdateImage: FC<Pick<IWord, 'id'>> = ({ id }) => {
  const updateWordImage = (inputData: ChangeEvent<HTMLInputElement>): void => {
    const formData: FormData = new FormData();
    const files: FileList | null = inputData?.target?.files;

    if (files && files.length) {
      const [image] = files;
      formData.append('imageSrc', image);

      WordsSDK.update({ wordId: id, body: formData });
    } else {
      message.error(ERROR.UPLOAD_FILE);
    }
  };

  return (
    <>
      <S.Input
        type="file"
        id="imageSrc"
        name="imageSrc"
        onChange={updateWordImage}
      />
      <S.ImageUpdate htmlFor="imageSrc">
        <span>Update image</span>
      </S.ImageUpdate>
    </>
  );
};
