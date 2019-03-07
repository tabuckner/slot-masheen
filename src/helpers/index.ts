export class Helpers {
  public getKeyAsMemberOf<T>(targetObj: any, key: string): keyof T {
    return targetObj[key as keyof T]
  }
}
