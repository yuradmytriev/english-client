import React, { FC } from 'react';
import { useFormik } from 'formik';
import { IWord } from 'components/Word/IWord';
import { Button, Form, Icon, Input, Modal, message } from 'antd';
import { useToggle } from 'hooks';
import { createFormDataBody } from './utils';
import { FETCH_WORDS_LIST_URL } from '../../constants';
import { IWordInput } from './IWordInput';
import { FileInput } from './FileInput';
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

const FormItem = ({ type, ...props }: { type: 'input' | 'textarea' }) => {
  const { TextArea } = Input;

  const formItemsType = {
    input: <Input {...props} />,
    textarea: <TextArea {...props} />,
  };

  return formItemsType[type] || <Input {...props} />;
};

const fromConfig = closeAddWordModal => ({
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
    const formDataBody: FormData = createFormDataBody(values);

    const { ok, statusText } = await fetch(FETCH_WORDS_LIST_URL, {
      method: 'POST',
      body: formDataBody,
    });

    if (ok) {
      message.success(statusText);
      closeAddWordModal();
    } else {
      message.error(statusText);
    }
  },
});

const AddWord: FC = () => {
  const { visible, openAddWordModal, closeAddWordModal } = useToggle();

  const { handleSubmit, handleChange, setFieldValue } = useFormik(
    fromConfig(closeAddWordModal),
  );

  return (
    <>
      <S.Container onClick={openAddWordModal}>
        <S.Plus>
          <Icon type="plus" />
        </S.Plus>
        <span>Add new word</span>
      </S.Container>
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
              Add word
            </Button>
          </S.ButtonWrapper>
        </Form>
      </Modal>
    </>
  );
};

export { AddWord };
