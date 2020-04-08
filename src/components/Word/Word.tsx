import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Popover } from 'antd';
import { Frequency } from 'components/Frequency';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import { FETCH_WORDS_LIST_URL } from '../../constants';
import * as S from './styles';
import { IWord } from './IWord';

export const Word: FC<IWord> = ({ id, word, translate, imageSrc }) => {
  const { fetchWordsList } = useFetchWordsList();

  const deleteWordCard = async () => {
    const response = await fetch(`${FETCH_WORDS_LIST_URL}/${id}`, {
      method: 'DELETE',
    });

    const wasWordDeletedSuccessfully = await response.json();

    if (wasWordDeletedSuccessfully) {
      fetchWordsList();
    }
  };

  return (
    <>
      <S.WordCard>
        <S.CardBody>
          <div>
            <Link key={id} to={`word/${id}`}>
              <S.Meta title={word} description={translate} />
              <S.FrequencyWrapper>
                <Frequency showTitle={false} word={word} />
              </S.FrequencyWrapper>
            </Link>
            <S.IconWrapper>
              <Popover
                placement="bottom"
                content={(
                  <S.IconContent onClick={deleteWordCard}>
                    <Icon type="delete" />
                    <span>Delete</span>
                  </S.IconContent>
                )}
                trigger="click"
              >
                <div>. . .</div>
              </Popover>
            </S.IconWrapper>
          </div>
          <S.CardImage src={imageSrc} alt={word} />
        </S.CardBody>
      </S.WordCard>
    </>
  );
};
