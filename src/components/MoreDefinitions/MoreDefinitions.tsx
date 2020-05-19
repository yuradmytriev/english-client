import React, { FC, useEffect, useState, Children } from 'react';
import { Popconfirm, Button, Alert } from 'antd';
import { IDefinition } from 'interfaces/IDefinition';
import { fetchWordFromRapid } from 'utils/wordsApiFetch';

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
            <Alert
              type="info"
              message={<Definition definition={definition} />}
            />
          )),
      )
    : null;
};

export const MoreDefinitions: FC<{ word: string }> = ({ word }) => {
  const [definitions, setDefinitions] = useState<IDefinition[] | null>(null);

  useEffect(() => {
    (async () => {
      const definitions = await fetchWordFromRapid('definitions', word);

      setDefinitions(definitions.definitions);
    })();
  }, []);

  return definitions ? (
    <Popconfirm
      icon={null}
      placement="bottom"
      title={<DefinitionsList definitions={definitions} />}
    >
      <Button type="primary">Show more definitions</Button>
    </Popconfirm>
  ) : null;
};
