type keyStorage = 'access-token';

export default class StorageUtils {
  static get(k: keyStorage): string | null {
    try {
      return JSON.parse(localStorage.getItem(k) ?? '');
    } catch (e) {
      return null;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static set(k: keyStorage, v: any): void {
    localStorage.setItem(k, JSON.stringify(v));
  }

  static clear(): void {
    localStorage.clear();
  }

  static remove(k: keyStorage): void {
    localStorage.removeItem(k);
  }
}
