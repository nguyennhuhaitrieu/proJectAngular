import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
})
export class PipeComponent {
  courseObj : any = {
    'id'    : 20 ,
    'date'  : new Date(),
    'name'  : 'Angular4',
    'price' : 69.87654,
    'require' : ['jquery','html','css','react','typescript']
  }
}
