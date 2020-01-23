import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time',
  pure: true   // cache-ing input value, change just if input value changed
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const t = Number(value);
    if (isNaN(t) || t < 0) {
      return '--:--';
    }
    return Math.trunc(t / 60) + ':' + Math.trunc(t % 60);
  }

}
