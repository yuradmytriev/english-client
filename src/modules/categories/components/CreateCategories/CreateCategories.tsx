import React from 'react';
import { useFormik } from 'formik';
import { Button, Form, Icon, Input, Modal } from 'antd';
import { CategoriesSDK } from 'modules/categories/sdk/CategoriesSDK';
import { useToggleModal } from 'shared/hooks';
import * as S from './styles';

interface ICategoriesForm {
  name: string;
}

const config = {
  initialValues: {
    name: '',
  },
  onSubmit: (input: ICategoriesForm) => {
    CategoriesSDK.create(input.name);
  },
};

export const CreateCategories = () => {
  const { handleSubmit, handleChange } = useFormik(config);
  const { visible, openModal, closeModal } = useToggleModal();

  return (
    <>
      <S.CreateCategoriesWrapper onClick={openModal}>
        <Icon theme="twoTone" type="folder-add" />
      </S.CreateCategoriesWrapper>

      <Modal
        centered
        title="New category"
        footer={null}
        destroyOnClose
        visible={visible}
        onCancel={closeModal}
      >
        <Form onSubmit={handleSubmit}>
          <S.InputLayout>
            <Input name="name" onChange={handleChange} />
          </S.InputLayout>
          <Button type="primary" htmlType="submit">
            Add category
          </Button>
        </Form>
      </Modal>
    </>
  );
};
