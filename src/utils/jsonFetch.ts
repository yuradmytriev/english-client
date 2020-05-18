export const jsonFetch = async (url: string): Promise<any> => {
  const response = await fetch(url);

  return response.json();
};
