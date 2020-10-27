import { useEffect, useState } from 'react';
import { IDefinition } from 'interfaces/IDefinition';
import { fetchWordFromRapid } from 'shared/utils/wordsApiFetch';

export const useFetchDefinitions = word => {
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

  return { definitions };
};
