import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Button, Form, Icon, Input, message, Modal } from 'antd';
import { useToggleModal } from 'shared/hooks';
import { IWord } from 'shared/interfaces/IWord';
import { IWordInput } from 'modules/words/interfaces/IWordInput';
import { firstLetterToUpperCase } from 'shared/utils/firstLetterToUpperCase';
import { useFetchWords } from 'shared/state/fetchWords/useFetchWords';
import { useForms } from 'modules/words/hooks/useForms';
import { fetchSimilarWords } from 'modules/similarWords';
import { fetchSameWords } from 'modules/sameWords';
import { SERVER_URL } from 'shared/constants/url';
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
  fetchWords: Function,
): Promise<void> => {
  const formDataBody: FormData = createFormDataBody(values);

  const { ok, statusText } = await fetch(`${SERVER_URL}/words`, {
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

const fromConfig = (closeAddWordModal: any, fetchWords: any): any => ({
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
    const sameWords: IWord[] = await fetchSameWords(values);
    const similarWords: IWord[] = await fetchSimilarWords(values.word);

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
