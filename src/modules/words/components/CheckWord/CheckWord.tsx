import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Modal, Input } from 'antd';
import { useFormik } from 'formik';
import { IWord } from 'shared/interfaces/IWord';
import { fetchSimilarWords, showSimilarWordsModal } from 'modules/similarWords';
import { fetchSameWords, showSameWordsModal } from 'modules/sameWords';
import * as S from './styles';
import { useToggleModal } from '../../../../shared/hooks';
import { AddWordModal } from '../AddWord';

const { confirm } = Modal;

export const CheckWord = () => {
  const history = useHistory();
  const { openModal, visible, closeModal } = useToggleModal();

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
        showSameWordsModal(sameWords, history);
        return;
      }

      confirm({
        title: `This is a new word`,
        onOk() {
          openModal();
        },
      });
    },
  });

  const { handleSubmit, handleChange } = useFormik(fromConfig());

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <S.CheckWordWrapper>
          <Input name="checkWord" onChange={handleChange} />
          <S.CheckButton type="primary" htmlType="submit">
            Check word
          </S.CheckButton>
        </S.CheckWordWrapper>
      </Form>
      <AddWordModal visible={visible} closeModal={closeModal} />
    </>
  );
};
