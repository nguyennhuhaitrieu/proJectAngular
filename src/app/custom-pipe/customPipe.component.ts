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
    'require' : ['jquery','html','css','react','typescript','bootstrap']
  }

  // Capitalize
  text: string = "angular 2 is very easy";

  //Array NUmber
  arrNumber: number[] = [8,9,5,4,3,2,1,5,9] ;

  summaryString: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ";

}
