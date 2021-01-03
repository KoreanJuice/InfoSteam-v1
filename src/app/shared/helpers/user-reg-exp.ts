export function notIdUserRegExp(str: string): string {
  const nonDigitRegExp = /[^\d]+/g;
  if (str.match(nonDigitRegExp)) { return str.match(nonDigitRegExp)[0]; }
  else { return ''; }
}
