import React, { FC } from 'react';
import { Popconfirm, Button } from 'antd';
import { IDefinition } from 'modules/word/interfaces/IDefinition';
import { ifElse } from 'shared/utils/ifElse';
import { DefinitionsList } from './DefinitionsList';
import { useFetchDefinitions } from './useFetchDefinitions';

export const MoreDefinitions: FC<{ word: string }> = ({
  word,
}): JSX.Element | null => {
  const { definitions } = useFetchDefinitions(word);

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
