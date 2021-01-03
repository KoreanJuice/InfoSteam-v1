import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showUTCTime'
})
export class ShowUTCTimePipe implements PipeTransform {
  // Sun, 16 Jun 2013 14:58:40 GMT
  transform(utcTimeString: string): any {
    const regex = /([\d]){2} ([A-z]){3} ([\d]){4}/g;

    return utcTimeString.match(regex);
  }

}
