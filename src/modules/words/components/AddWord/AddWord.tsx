import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Button, Form, Icon, Input, message, Modal } from 'antd';
import { useToggleModal } from 'shared/hooks';
import { IWord } from 'shared/interfaces/IWord';
import { IWordInput } from 'modules/words/interfaces/IWordInput';
import { jsonFetch } from 'shared/utils/jsonFetch';
import { firstLetterToUpperCase } from 'shared/utils/firstLetterToUpperCase';
import { useFetchWords } from 'shared/state/fetchWords/useFetchWords';
import { useForms } from 'modules/words/hooks/useForms';
import { FETCH_WORD_URL, FETCH_WORDS_LIST_URL } from 'shared/constants/url';
import { FileInput } from './FileInput';
import { createFormDataBody } from './utils';
import * as S from './styles';

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

const FormItem = ({ type, ...props }: any) => {
  const { TextArea } = Input;

  const formItemsType: any = {
    input: <Input {...props} />,
    textarea: <TextArea {...props} />,
  };

  return formItemsType[type] || <Input {...props} />;
};

const appendWord = async (
  values: IWord,
  fetchWords: Function,
): Promise<void> => {
  const formDataBody: FormData = createFormDataBody(values);

  const { ok, statusText } = await fetch(FETCH_WORDS_LIST_URL, {
    method: 'POST',
    body: formDataBody,
  });

  if (ok) {
    message.success(statusText);
    fetchWords();
  } else {
    message.error(statusText);
  }
};

// TODO: create single function
const fetchSameWords = async (values: IWord): Promise<IWord[]> => {
  const checkWordURL: string = `${FETCH_WORD_URL}/find/${values.word}`;
  const response = await fetch(checkWordURL);

  return response.json();
};

const fetchSimilarWords = (values: IWord): Promise<IWord[]> => {
  const checkSimilarWordURL: string = `${FETCH_WORD_URL}/similar/${values.word}`;

  return jsonFetch(checkSimilarWordURL);
};

const fromConfig = (closeAddWordModal: any, fetchWords: any): any => ({
  initialValues: {
    id: '',
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
    const sameWords: IWord[] = await fetchSameWords(values);
    const similarWords: IWord[] = await fetchSimilarWords(values);

    if (sameWords.length) {
      const [sameWord] = sameWords;

      confirm({
        title: `This word is already exists - ${sameWord.word}`,
        content: 'Are you sure that you want to add it?',
        onOk() {
          appendWord(values, fetchWords);
        },
      });
    } else if (similarWords.length) {
      const [similarWord] = similarWords;

      confirm({
        title: `You have similar word - ${similarWord.word}`,
        content: 'Are you sure that you want to add it?',
        onOk() {
          appendWord(values, fetchWords);
        },
      });
    } else {
      await appendWord(values, fetchWords);
    }
  },
});

const AddWord: FC = () => {
  const [forms, appendForm] = useForms();
  const { fetchWords } = useFetchWords();
  const { visible, openModal, closeModal } = useToggleModal();

  const { handleSubmit, handleChange, setFieldValue } = useFormik(
    fromConfig(closeModal, fetchWords),
  );

  return (
    <>
      <S.Container onClick={openModal}>
        <Icon type="plus" />
      </S.Container>
      <S.FormModal
        centered
        title="New word"
        footer={null}
        destroyOnClose
        visible={visible}
        onCancel={closeModal}
      >
        {forms.map((id: number) => (
          <Form key={id} onSubmit={handleSubmit}>
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
        <Button onClick={() => appendForm}>Append new word</Button>
      </S.FormModal>
    </>
  );
};

export { AddWord };
