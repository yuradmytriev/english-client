import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import { IWord } from 'components/Word/IWord';
import { Button, Form, Icon, Input, message, Modal } from 'antd';
import { useToggle } from 'hooks';
import { firstLetterToUpperCase } from 'utils/firstLetterToUpperCase';
import { createFormDataBody } from './utils';
import { FETCH_WORD_URL, FETCH_WORDS_LIST_URL } from '../../constants';
import { IWordInput } from './IWordInput';
import { FileInput } from './FileInput';
import * as S from './styles';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';

const inputs: Array<IWordInput> = [
  { name: 'word', type: 'input' },
  { name: 'translate', type: 'input' },
  { name: 'definition', type: 'textarea' },
  { name: 'context', type: 'textarea' },
  { name: 'example', type: 'textarea' },
  { name: 'synonym', type: 'input' },
  { name: 'antonym', type: 'input' },
];

const { confirm } = Modal;

const FormItem = ({ type, ...props }: { type: 'input' | 'textarea' }) => {
  const { TextArea } = Input;

  const formItemsType = {
    input: <Input {...props} />,
    textarea: <TextArea {...props} />,
  };

  return formItemsType[type] || <Input {...props} />;
};

const appendWord = async (
  values: IWord,
  fetchWordsList: any,
): Promise<void> => {
  const formDataBody: FormData = createFormDataBody(values);

  const { ok, statusText } = await fetch(FETCH_WORDS_LIST_URL, {
    method: 'POST',
    body: formDataBody,
  });

  if (ok) {
    message.success(statusText);
    fetchWordsList();
  } else {
    message.error(statusText);
  }
};

const fromConfig = (closeAddWordModal, fetchWordsList) => ({
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
  onSubmit: async (values: IWord) => {
    const checkWordURL: string = `${FETCH_WORD_URL}/by-text/${values.word}`;
    const response = await fetch(checkWordURL);
    const words: IWord[] = await response.json();
    const isWordExists: boolean = !!words.length;

    if (isWordExists) {
      const [word] = words;

      confirm({
        title: `This word is already exists - ${word.word}`,
        content: 'Are you sure that you want to add it?',
        onOk() {
          appendWord(values, fetchWordsList);
        },
      });
    } else {
      await appendWord(values, fetchWordsList);
    }
  },
});

const AddWord: FC = () => {
  const { fetchWordsList } = useFetchWordsList();
  const { visible, openAddWordModal, closeAddWordModal } = useToggle();
  const [forms, addForm] = useState([1]);

  const { handleSubmit, handleChange, setFieldValue } = useFormik(
    fromConfig(closeAddWordModal, fetchWordsList),
  );

  return (
    <>
      <S.Container onClick={openAddWordModal}>
        <Icon type="plus" />
      </S.Container>
      <S.FormModal
        centered
        title="New word"
        footer={null}
        destroyOnClose
        visible={visible}
        onCancel={closeAddWordModal}
      >
        {forms.map(() => (
          <Form onSubmit={handleSubmit}>
            {inputs.map(({ name, type }: IWordInput) => (
              <S.InputWrapper key={name}>
                <FormItem
                  key={name}
                  name={name}
                  type={type}
                  placeholder={firstLetterToUpperCase(name)}
                  onChange={handleChange}
                />
              </S.InputWrapper>
            ))}
            <FileInput setFieldValue={setFieldValue} />
            <S.ButtonWrapper>
              <Button type="primary" htmlType="submit">
                Add word
              </Button>
            </S.ButtonWrapper>
          </Form>
        ))}
        <Button onClick={() => addForm(prev => [...prev, 1])}>
          Append new word
        </Button>
      </S.FormModal>
    </>
  );
};

export { AddWord };
