import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent {
  title = 'app event';

  constructor(){}

  goButtonFirst() {
    console.log("Trieu Nguyen")
  }

  goButtonLast() {
    console.log("Demo Angular");
  }

}
