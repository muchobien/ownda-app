export class PlainObject {
  static keys = <T>(obj: T): Array<keyof T> =>
    Object.keys(obj) as Array<keyof T>;

  static entries = <T>(obj: T): Array<[keyof T, T[keyof T]]> =>
    Object.entries(obj) as Array<[keyof T, T[keyof T]]>;

  static values = <T>(obj: T): Array<T[keyof T]> =>
    Object.values(obj) as Array<T[keyof T]>;
}
