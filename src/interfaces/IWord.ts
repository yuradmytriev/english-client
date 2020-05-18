export interface IWord {
  id: number;
  word: string;
  translate: string;
  definition?: string;
  context?: string;
  example?: string;
  synonym?: string;
  antonym?: string;
  imageSrc: string;
}
