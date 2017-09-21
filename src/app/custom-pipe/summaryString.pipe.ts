import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  'name': 'summaryString'
})

export class SummaryString implements PipeTransform {
  transform(value: string, totalCharacter: number = 20 , character: string = "...."): any {
    if(value) {
      return value.substring(0,totalCharacter) + character;
    }else {
      return '';
    }
  }
}
