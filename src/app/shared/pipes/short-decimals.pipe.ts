import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDecimals'
})
export class ShortDecimalsPipe implements PipeTransform {

  transform(num: number): any {
    return num.toFixed(1);
  }

}
