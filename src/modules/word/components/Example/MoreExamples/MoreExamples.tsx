import React, { FC, useEffect, useState, Children } from 'react';
import { Popconfirm, Button } from 'antd';
import { fetchWordFromRapid } from 'utils/wordsApiFetch';
import { ifElse } from 'utils/ifElse';
import * as S from './styles';

const ExamplesList = ({
  examples,
}: {
  examples: ReadonlyArray<string>;
}): any => {
  const shouldShowFive = (example: string, index: number) => {
    const DEFINITIONS_LIMIT = 5;

    return index < DEFINITIONS_LIMIT;
  };

  return Children.toArray(
    examples
      .filter(shouldShowFive)
      .map((example: string) => (
        <S.Alert type="info" message={<div>{example}</div>} />
      )),
  );
};

export const MoreExamples: FC<{ word: string }> = ({ word }) => {
  const [examples, setExamples] = useState<ReadonlyArray<string> | null>(null);

  useEffect(() => {
    fetchWordFromRapid('examples', word)
      .then((examples: { examples?: ReadonlyArray<string> }) => {
        if (examples.examples) {
          setExamples(examples.examples);
        }

        return examples;
      })
      .catch(examples => {
        return examples;
      });
  }, []);

  return ifElse(
    Boolean(examples?.length),
    <Popconfirm
      icon={null}
      placement="bottom"
      title={<ExamplesList examples={examples as ReadonlyArray<string>} />}
    >
      <Button type="primary">Show more examples</Button>
    </Popconfirm>,
    null,
  );
};
