import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstFourLines'
})
export class FirstFourLinesPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.slice(0, 100);
  }
}