import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  'name': 'sortArray'
})

export class SortArrayPipe implements PipeTransform {
  transform(arrayCourse: string[], args: string): any {
    //console.log(arrayCourse);
    let sorted: string [] = arrayCourse.slice();
    //console.log(sorted);
    sorted.sort();

    if(args === "DESC") {
      sorted = sorted.reverse();
    }
    return sorted;
  }
}
