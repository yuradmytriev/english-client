export class wordsFilterStorage {
  static getFilter(): string | null {
    return window.localStorage.getItem('filter');
  }

  static setFilter(filter: string): void {
    window.localStorage.setItem('filter', filter);
  }
}
