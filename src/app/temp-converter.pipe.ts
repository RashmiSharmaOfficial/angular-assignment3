import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, tempType: string): number {
    var iTemperature = 0;
    if (tempType == 'toCelcius') {
      iTemperature = (value - 32) / 1.8;
    }
    else if (tempType == 'toFaren') {
      iTemperature = (value * 1.8) + 32
    }
    return iTemperature;
  }

}
