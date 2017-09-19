import { Component } from '@angular/core';

@Component({
  selector: 'app-project-setting-template',
  templateUrl: './projectSettingTemplate.component.html'
})
export class ProjectSettingTemplateComponent {
  textDemo: string = "";
  templateCurrent: string = "";
  backgroundColor: string = "";
  textColor: string = "";

  constructor(){
    this.textDemo = "Angular 2 is not difficult";
  }

  changeTemplate($event): void {
    this.templateCurrent = $event.target.value;
    //console.log(this.templateCurrent);
  }

  setStyles() {
    return {
      'background-color' : this.backgroundColor,
      'color' : this.textColor
    };
  }

  changeBackgoundColor($event): void {
    this.backgroundColor = $event.target.value;
    //console.log(this.backgroundColor);
  }

  changeTextColor($event): void {
    this.textColor = $event.target.value;
    //console.log(this.textColor);
  }

}
