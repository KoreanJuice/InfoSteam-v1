import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanSearch'
})
export class CleanSearchPipe implements PipeTransform {

  transform(str: string): number {
    return null;
  }

}
