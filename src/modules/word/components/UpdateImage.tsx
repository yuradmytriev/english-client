import React, { FC, ChangeEvent } from 'react';
import { message } from 'antd';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { IWord } from 'shared/interfaces/IWord';
import * as S from '../page/styles';

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
        id={`imageSrc ${id}`}
        name="imageSrc"
        onChange={updateWordImage}
      />
      <S.ImageUpdate htmlFor={`imageSrc ${id}`}>
        <span>Update image</span>
      </S.ImageUpdate>
    </>
  );
};
