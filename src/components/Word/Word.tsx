import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Modal, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { SERVER_URL } from 'constants/url';
import { useToggle } from 'hooks';
import { Frequency } from 'components/Frequency';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import { FETCH_WORDS_LIST_URL } from '../../constants';
import * as S from './styles';
import { IWord } from './IWord';
import { IWordInput } from '../AddWord/IWordInput';
import { FileInput } from '../AddWord/FileInput';

const inputs: Array<IWordInput> = [
  { name: 'word', type: 'input' },
  { name: 'translate', type: 'input' },
  { name: 'definition', type: 'textarea' },
  { name: 'context', type: 'textarea' },
  { name: 'example', type: 'textarea' },
  { name: 'synonym', type: 'input' },
  { name: 'antonym', type: 'input' },
];

const FormItem = ({ type, ...props }: { type: 'input' | 'textarea' }) => {
  const { TextArea } = Input;

  const formItemsType = {
    input: <Input {...props} />,
    textarea: <TextArea {...props} />,
  };

  return formItemsType[type] || <Input {...props} />;
};

export const Word: FC<IWord> = ({ id, word, translate, imageSrc }) => {
  const { fetchWordsList } = useFetchWordsList();
  const { visible, closeAddWordModal } = useToggle();

  const deleteWordCard = async () => {
    const response = await fetch(`${FETCH_WORDS_LIST_URL}/${id}`, {
      method: 'DELETE',
    });

    const wasWordDeletedSuccessfully = await response.json();

    if (wasWordDeletedSuccessfully) {
      fetchWordsList();
    }
  };

  const { handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues: {
      word: '',
      translate: '',
      definition: '',
      context: '',
      example: '',
      synonym: '',
      antonym: '',
      imageSrc: '',
    },
    onSubmit: async (body: Omit<IWord, 'id'>) => {
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
      <Link key={id} to={`word/${id}`}>
        <S.WordCard>
          <S.CardBody>
            <div>
              <S.Meta title={word} description={translate} />
              <S.FrequencyWrapper>
                <Frequency showTitle={false} word={word} />
              </S.FrequencyWrapper>
            </div>
            <S.CardImage src={`${SERVER_URL}/image/${imageSrc}`} alt={word} />
          </S.CardBody>
        </S.WordCard>
      </Link>
      <Modal
        title="Add new word"
        footer={null}
        visible={visible}
        onCancel={closeAddWordModal}
      >
        <Form onSubmit={handleSubmit}>
          {inputs.map(({ name, type }: IWordInput) => (
            <S.InputWrapper key={name}>
              <FormItem
                key={name}
                name={name}
                type={type}
                placeholder={name}
                onChange={handleChange}
              />
            </S.InputWrapper>
          ))}
          <FileInput setFieldValue={setFieldValue} />
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
