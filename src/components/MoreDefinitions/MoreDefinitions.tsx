import React, { FC, useEffect, useState, Children } from 'react';
import { Popconfirm, Button } from 'antd';
import { fetchWordFromRapid } from 'utils/wordsApiFetch';
import * as S from './styles';

interface IDefinition {
  definition: string;
  partOfSpeech: string;
}

const DefinitionsList = ({ definitions }: { definitions: IDefinition[] }) => {
  const DEFINITIONS_LIMIT = 5;
  const shouldShowFiveDefinitions = (definition: IDefinition, index: number) =>
    index < DEFINITIONS_LIMIT && definition;

  const Definition: FC<{ definition: IDefinition }> = ({ definition }) => (
    <>
      <div>{definition.definition}</div>
    </>
  );

  return definitions
    ? Children.toArray(
        definitions
          .filter(shouldShowFiveDefinitions)
          .map((definition: IDefinition) => (
            <S.Alert
              type="info"
              message={<Definition definition={definition} />}
            />
          )),
      )
    : null;
};

export const MoreDefinitions: FC<{ definition: string }> = ({ definition }) => {
  const [definitions, setDefinitions] = useState<IDefinition[] | null>(null);

  useEffect(() => {
    (async () => {
      const definitions = await fetchWordFromRapid('definitions', definition);

      setDefinitions(definitions.definitions);
    })();
  }, []);

  return definitions ? (
    <Popconfirm
      icon={null}
      placement="bottom"
      title={<DefinitionsList definitions={definitions} />}
    >
      <Button>Show more definitions</Button>
    </Popconfirm>
  ) : null;
};
