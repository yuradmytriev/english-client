export interface IUseWordsFilter {
  filteredWords: any[];
  showMemoizedWords: (words: any[]) => void;
  showUnlearnedWords: (words: any[]) => void;
  showAllWords: (words: any[]) => void;
  showDraftWords: (words: any[]) => void;
  setWords: (words: any[]) => void;
}
