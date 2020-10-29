import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Button, Form, Input, message, Modal } from 'antd';
import { useToggleModal } from 'shared/hooks';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';
import { firstLetterToUpperCase } from 'shared/utils/firstLetterToUpperCase';
import { useFetchWordsOffset } from 'shared/state/fetchWordsOffset/useFetchWordsOffset';
import { fetchSameWords } from 'modules/sameWords';
import { useForms } from 'modules/words/hooks/useForms';
import { fetchSimilarWords } from 'modules/similarWords';
import { IWordInput } from 'modules/words/interfaces/IWordInput';
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
  appendWordToList: Function,
): Promise<void> => {
  const formDataBody: FormData = createFormDataBody(values);
  const hideLoader = message.loading('Action in progress..', 0);

  const response = await fetch(`${SERVER_URL}/words`, {
    method: 'POST',
    body: formDataBody,
  });

  const word = await response.json();
  appendWordToList(word);

  if (response.ok) {
    message.success(response.statusText);
    hideLoader();
  } else {
    message.error(response.statusText);
  }
};

const fromConfig = (closeAddWordModal: any, appendWordToList: any): any => ({
  initialValues: {
    id: '',
    word: '',
    translate: '',
    definition: '',
    context: '',
    example: '',
    synonym: '',
    imageSrc: '',
  },
  onSubmit: async (values: IWord) => {
    const sameWords: IWord[] = await fetchSameWords(values.word);
    const similarWords: IWord[] = await fetchSimilarWords(values.word);

    if (sameWords.length) {
      const [sameWord] = sameWords;

      confirm({
        title: `This word is already exists - ${sameWord.word}`,
        content: 'Are you sure that you want to add it?',
        onOk() {
          closeAddWordModal();
          appendWord(values, appendWordToList);
        },
      });
    } else if (similarWords.length) {
      const [similarWord] = similarWords;

      confirm({
        title: `You have similar word - ${similarWord.word}`,
        content: 'Are you sure that you want to add it?',
        onOk() {
          closeAddWordModal();
          appendWord(values, appendWordToList);
        },
      });
    } else {
      closeAddWordModal();
      await appendWord(values, appendWordToList);
    }
  },
});

const AddWordModal: FC = ({ visible, closeModal }) => {
  const [forms, appendForm] = useForms();
  const { appendWordToList } = useFetchWordsOffset();

  const { handleSubmit, handleChange, setFieldValue } = useFormik(
    fromConfig(closeModal, appendWordToList),
  );

  return (
    <>
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

export { AddWordModal };
