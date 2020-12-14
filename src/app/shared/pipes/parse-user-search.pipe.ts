import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseUserSearch'
})
export class ParseUserSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
