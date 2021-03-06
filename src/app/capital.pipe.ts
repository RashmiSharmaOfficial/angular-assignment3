import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLowerCase();
    value = value[0].toUpperCase() + value.slice(1);
    return value;
  }

}
