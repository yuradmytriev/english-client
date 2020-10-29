import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Modal, Input } from 'antd';
import { useFormik } from 'formik';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';
import { fetchSimilarWords, showSimilarWordsModal } from 'modules/similarWords';
import * as S from './styles';

const fetchSameWords = async (value): Promise<IWord[]> => {
  const checkWordURL: string = `${SERVER_URL}/word/find/${value}`;
  const response = await fetch(checkWordURL);

  return response.json();
};

const { confirm } = Modal;

export const CheckWord = () => {
  const history = useHistory();

  const fromConfig = (): any => ({
    initialValues: {
      checkWord: '',
    },
    onSubmit: async value => {
      const sameWords: IWord[] = await fetchSameWords(value.checkWord);
      const similarWords: IWord[] = await fetchSimilarWords(value.checkWord);

      if (similarWords.length) {
        showSimilarWordsModal(similarWords, history);
        return;
      }

      if (sameWords.length) {
        const [sameWord] = sameWords;

        confirm({
          title: `This word is already exists - ${sameWord.word}`,
          onOk() {
            history.push(`word/${sameWord.word}`);
          },
        });
        return;
      }

      confirm({
        title: `This is a new word`,
      });
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
