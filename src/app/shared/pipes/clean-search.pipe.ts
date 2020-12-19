import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanSearch'
})
export class CleanSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
