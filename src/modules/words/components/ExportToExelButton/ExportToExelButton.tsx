import React, { FC } from 'react';
import { SERVER_URL } from 'shared/constants/url';
import * as S from './styles';

export const ExportToExelButton: FC = () => {
  const handleClick = () => {
    fetch(`${SERVER_URL}/words/to-exel`)
      .then(res => res.json())
      .then(res => {
        if (res.status === 'OK') {
          return fetch(`${SERVER_URL}/words.xlsx`);
        }

        return res;
      })
      .then((response: Response | undefined) => response?.blob())
      .then(blob => {
        const file = window.URL.createObjectURL(blob);
        window.location.assign(file);

        return blob;
      })
      .catch(e => e);
  };

  return (
    <S.ExcelIcon theme="twoTone" type="file-excel" onClick={handleClick} />
  );
};
