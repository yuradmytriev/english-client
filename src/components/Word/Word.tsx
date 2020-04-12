import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Popover } from 'antd';
import { Frequency } from 'components/Frequency';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import { FETCH_WORDS_LIST_URL } from '../../constants';
import * as S from './styles';
import { IWord } from './IWord';

export const Word: FC<{ words: IWord[]; showInfo: boolean }> = ({
  words,
  showInfo,
}) => {
  const [showWord] = words;
  const { id, word, translate, imageSrc } = showWord;

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
      <Link key={id} to={`word/${word}`}>
        <S.WordCard>
          <S.CardBody>
            <div>
              <S.Meta title={word} description={showInfo ? translate : null} />
              <S.FrequencyWrapper>
                <Frequency showTitle={false} word={word} />
              </S.FrequencyWrapper>
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
            {showInfo && <S.CardImage img={imageSrc} alt={word} />}
          </S.CardBody>
        </S.WordCard>
      </Link>
    </>
  );
};
