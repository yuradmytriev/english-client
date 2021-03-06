import { IWord } from 'shared/interfaces/IWord';

export const createFormDataBody = (values: IWord): FormData => {
  const formData: FormData = new FormData();

  Object.entries(values).forEach(([name, value]) => {
    if (value) {
      formData.append(name, value);
    }
  });

  return formData;
};
