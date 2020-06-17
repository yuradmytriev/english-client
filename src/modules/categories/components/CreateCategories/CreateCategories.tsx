import React from 'react';
import { useFormik } from 'formik';
import { Button, Form, Icon, Input, Modal } from 'antd';
import { useCategories } from 'modules/categories/state/categories/useCategories';
import { useToggleModal } from 'shared/hooks';
import * as S from './styles';

interface ICategoriesForm {
  name: string;
}

export const CreateCategories = () => {
  const { createCategory } = useCategories();
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (input: ICategoriesForm) => {
      createCategory(input.name);
    },
  });
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
