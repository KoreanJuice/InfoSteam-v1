import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanSearch'
})
export class CleanSearchPipe implements PipeTransform {
  // TODO: UNUSED. is this still relevant?
  transform(str: string): string {
    return str.trim().toLowerCase();
  }

}
