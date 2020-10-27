import React, { Children } from 'react';
import { Alert } from 'antd';
import { IDefinition } from 'modules/word/interfaces/IDefinition';

const shouldShowFiveDefinitions = (definition: IDefinition, index: number) => {
  const DEFINITIONS_LIMIT = 5;

  return index < DEFINITIONS_LIMIT;
};

export const DefinitionsList = ({
  definitions,
}: {
  definitions: ReadonlyArray<IDefinition>;
}): any => {
  return Children.toArray(
    (definitions as ReadonlyArray<IDefinition>)
      .filter(shouldShowFiveDefinitions)
      .map(({ definition }: IDefinition) => (
        <Alert type="info" message={<div>{definition}</div>} />
      )),
  );
};
