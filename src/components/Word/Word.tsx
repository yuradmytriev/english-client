import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Modal, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { SERVER_URL } from 'constants/url';
import { useToggle } from 'hooks';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import { FETCH_WORDS_LIST_URL } from '../../constants';
import * as S from './styles';
import { IWord } from './IWord';

const { Meta } = Card;

const inputs: Array<string> = ['word', 'example', 'translate', 'explanation'];

export const Word: FC<IWord> = ({ id, word, translate, imageSrc }) => {
  const { fetchWordsList } = useFetchWordsList();
  const { visible, openAddWordModal, closeAddWordModal } = useToggle();

  const deleteWordCard = async () => {
    const response = await fetch(`${FETCH_WORDS_LIST_URL}/${id}`, {
      method: 'DELETE',
    });

    const wasWordDeletedSuccessfully = await response.json();

    if (wasWordDeletedSuccessfully) {
      fetchWordsList();
    }
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      word: '',
      example: '',
      translate: '',
      explanation: '',
      imageSrc: '',
    },
    onSubmit: async (body: IWord) => {
      await fetch(`${FETCH_WORDS_LIST_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    },
  });

  return (
    <>
      <Card
        actions={[
          <Link to={`word/${id}`}>
            <Button key="update">Open</Button>
          </Link>,
          <Button key="update" onClick={openAddWordModal}>
            Update
          </Button>,
          <Button key="delete" type="danger" onClick={deleteWordCard}>
            Delete
          </Button>,
        ]}
      >
        <S.CardBody>
          <Meta title={word} description={translate} />
          <S.CardImage src={`${SERVER_URL}/image/${imageSrc}`} alt={word} />
        </S.CardBody>
      </Card>
      <Modal
        title="Add new word"
        footer={null}
        visible={visible}
        onCancel={closeAddWordModal}
      >
        <Form onSubmit={handleSubmit}>
          {inputs.map((input: string) => (
            <S.InputWrapper key={input}>
              <Input
                key={input}
                name={input}
                placeholder={input}
                onChange={handleChange}
              />
            </S.InputWrapper>
          ))}
          <S.ButtonWrapper>
            <Button type="primary" htmlType="submit">
              Update word
            </Button>
          </S.ButtonWrapper>
        </Form>
      </Modal>
    </>
  );
};
