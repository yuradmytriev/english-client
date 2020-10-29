import React from 'react';
import { Icon } from 'antd';
import { useToggleModal } from 'shared/hooks';
import { AddWordModal } from './AddWordModal';
import * as S from './styles';

export const AddWordButton = () => {
  const { openModal, visible, closeModal } = useToggleModal();

  return (
    <>
      <S.Container onClick={openModal}>
        <Icon type="plus" />
      </S.Container>
      <AddWordModal visible={visible} closeModal={closeModal} />
    </>
  );
};
