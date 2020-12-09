import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseSearch'
})
export class ParseSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
