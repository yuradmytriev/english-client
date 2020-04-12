export const fetchWordFromRapid = async (
  type: string,
  word: string,
): Promise<any> => {
  try {
    const response = await fetch(
      `https://wordsapiv1.p.rapidapi.com/words/${word}/${type}`,
      {
        headers: {
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
          'X-RapidAPI-Key':
            '5d28b8ff71mshd8c7cd3990fc3c8p1f6ddbjsnad4a5cb879c7',
        },
      },
    );

    return response.json();
  } catch (e) {
    console.error(e);
  }
};
