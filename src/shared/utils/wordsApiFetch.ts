import { SERVER_URL } from 'shared/constants/url';

export const fetchWordFromRapid = async (
  type: string,
  word: string,
): Promise<any> => {
  try {
    const response = await fetch(`${SERVER_URL}/word/${type}/${word}`);

    return response.json();
  } catch (e) {
    return e;
  }
};
