import React, { FC } from 'react';
import * as S from './styles';

export const ExportToExelButton: FC = () => {
  const handleClick = () => {
    fetch('http://localhost:3008/words/to-exel')
      .then(res => res.json())
      .then(res => {
        if (res.status === 'OK') {
          return fetch('http://localhost:3008/words.xlsx');
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
