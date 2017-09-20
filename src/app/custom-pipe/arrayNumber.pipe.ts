import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  'name': 'array'
})

export class ArrayNumberPipe implements PipeTransform {
  transform(arrayInput: number[], args: string): any {
    return arrayInput.filter(value => {
      console.log(args);
      if(args === "odd") {
        return value % 2 !=0;
      }
      else {
        return value % 2 == 0;
      }
    });
  }
}
