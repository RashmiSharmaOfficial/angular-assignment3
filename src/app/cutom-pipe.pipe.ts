import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutomPipe',
  pure: false
})
export class CutomPipePipe implements PipeTransform {

  transform(value: any): any {
    return value.join();
  }
}
