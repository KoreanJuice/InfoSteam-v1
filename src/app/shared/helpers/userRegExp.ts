// TODO: is this optimus?
export function userRegExp(str: string): string {
  const nonDigitRegExp = /[^\d]+/g;
  if (str.match(nonDigitRegExp)) { return str.match(nonDigitRegExp)[0]; }
  return '';
}
