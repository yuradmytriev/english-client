import React, { FC, useEffect, useState, Children } from 'react';
import { Popconfirm, Button, Alert } from 'antd';
import { IDefinition } from 'interfaces/IDefinition';
import { fetchWordFromRapid } from 'shared/utils/wordsApiFetch';
import { ifElse } from 'shared/utils/ifElse';

const DefinitionsList = ({
  definitions,
}: {
  definitions: ReadonlyArray<IDefinition>;
}): any => {
  const shouldShowFiveDefinitions = (
    definition: IDefinition,
    index: number,
  ) => {
    const DEFINITIONS_LIMIT = 5;

    return index < DEFINITIONS_LIMIT;
  };

  return Children.toArray(
    (definitions as ReadonlyArray<IDefinition>)
      .filter(shouldShowFiveDefinitions)
      .map((definition: IDefinition) => (
        <Alert type="info" message={<div>{definition.definition}</div>} />
      )),
  );
};

export const MoreDefinitions: FC<{ word: string }> = ({
  word,
}): JSX.Element | null => {
  const [definitions, setDefinitions] = useState<ReadonlyArray<
    IDefinition
  > | null>(null);

  useEffect(() => {
    fetchWordFromRapid('definitions', word)
      .then((definitions: { definitions?: ReadonlyArray<IDefinition> }) => {
        if (definitions.definitions) {
          setDefinitions(definitions.definitions);
        }

        return definitions;
      })
      .catch(definitions => {
        return definitions;
      });
  }, []);

  return ifElse(
    Boolean(definitions?.length),
    <Popconfirm
      icon={null}
      placement="bottom"
      title={
        <DefinitionsList
          definitions={definitions as ReadonlyArray<IDefinition>}
        />
      }
    >
      <Button type="primary">Show more definitions</Button>
    </Popconfirm>,
    null,
  );
};
