export interface Storage {
  save<T>(key: string, value: T): void;
  get<T>(key: string): T;
}

export const StorageLocal = {
  save: <T>(key: string, value: T): void => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string, defaultValue: T): T => {
    const stringified = window.localStorage.getItem(key);
    const value = stringified ? JSON.parse(stringified) : defaultValue;
    return value;
  },
};

const storage = StorageLocal;
export { storage };
