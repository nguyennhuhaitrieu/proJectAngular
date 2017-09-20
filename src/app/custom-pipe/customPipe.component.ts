import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './customPipe.component.html',
})

export class CustomPipeComponent {
  courseObj : any = {
    'id'    : 20 ,
    'date'  : new Date(),
    'name'  : 'Angular4',
    'price' : 69.87654,
    'require' : ['jquery','html','css','react','typescript']
  }

  // Capitalize
  text: string = "angular 2 is very easy";

  //Array NUmber
  arrNumber: number[] = [8,9,5,4,3,2,1,5,9] ;

}
