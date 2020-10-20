import React from 'react';
import { Button, Form, Modal, Input } from 'antd';
import { useFormik } from 'formik';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';
import { jsonFetch } from 'shared/utils/jsonFetch';
import * as S from './styles';

const fetchSimilarWords = (value): Promise<IWord[]> => {
  const checkSimilarWordURL: string = `${SERVER_URL}/word/similar/${value}`;

  return jsonFetch(checkSimilarWordURL);
};

const fetchSameWords = async (value): Promise<IWord[]> => {
  const checkWordURL: string = `${SERVER_URL}/word/find/${value}`;
  const response = await fetch(checkWordURL);

  return response.json();
};

const { confirm } = Modal;

export const CheckWord = () => {
  const fromConfig = (): any => ({
    initialValues: {
      checkWord: '',
    },
    onSubmit: async value => {
      const sameWords: IWord[] = await fetchSameWords(value.checkWord);
      const similarWords: IWord[] = await fetchSimilarWords(value.checkWord);

      if (sameWords.length) {
        const [sameWord] = sameWords;

        confirm({
          title: `This word is already exists - ${sameWord.word}`,
        });
      } else if (similarWords.length) {
        const [similarWord] = similarWords;

        confirm({
          title: `You have similar word - ${similarWord.word}`,
        });
      } else {
        confirm({
          title: `This is a new word`,
        });
      }
    },
  });

  const { handleSubmit, handleChange } = useFormik(fromConfig());

  return (
    <Form onSubmit={handleSubmit}>
      <S.CheckWordWrapper>
        <Input name="checkWord" onChange={handleChange} />
        <S.CheckButton type="primary" htmlType="submit">
          Check word
        </S.CheckButton>
      </S.CheckWordWrapper>
    </Form>
  );
};
