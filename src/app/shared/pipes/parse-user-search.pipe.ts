import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseUserSearch'
})
export class ParseUserSearchPipe implements PipeTransform {
  // TODO: UNUSED. is this still relevant?
  transform(str: string): string {
    const nonDigitRegExp = /[^\d]+/g;
    return str.match(nonDigitRegExp)[0];
  }

}
