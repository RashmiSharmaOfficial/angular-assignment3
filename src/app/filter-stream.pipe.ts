import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStream'
})
export class FilterStreamPipe implements PipeTransform {

  transform(value: any, fStream: string, propName: string): any {
    if (value.length === 0 || fStream == '') {
      return value;
    }

    const resultArray = []
    for (const item of value) {
      if (item[propName] == fStream) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
