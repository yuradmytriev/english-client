import React, { FC, useEffect, useState, Children } from 'react';
import { Popconfirm, Button } from 'antd';
import { fetchWordFromRapid } from 'utils/wordsApiFetch';
import * as S from './styles';

const ExamplesList = ({ examples }: { examples: string[] }) => {
  const DEFINITIONS_LIMIT = 5;
  const shouldShowFive = (example: string, index: number) =>
    index < DEFINITIONS_LIMIT && example;

  const Example: FC<{ example: string }> = ({ example }) => (
    <>
      <div>{example}</div>
    </>
  );

  return examples
    ? Children.toArray(
        examples
          .filter(shouldShowFive)
          .map((example: string) => (
            <S.Alert type="info" message={<Example example={example} />} />
          )),
      )
    : null;
};

export const MoreExamples: FC<{ example: string }> = ({ example }) => {
  const [examples, setExamples] = useState<IDefinition[] | null>(null);

  useEffect(() => {
    (async () => {
      const examples = await fetchWordFromRapid('examples', example);

      setExamples(examples.examples);
    })();
  }, []);

  return examples ? (
    <Popconfirm
      icon={null}
      placement="bottom"
      title={<ExamplesList examples={examples} />}
    >
      <Button>Show more examples</Button>
    </Popconfirm>
  ) : null;
};
