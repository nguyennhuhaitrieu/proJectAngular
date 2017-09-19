import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './binding/event.component';
import { ProjectSettingTemplateComponent } from './project-setting-template/projectSettingTemplate.component';

import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ProjectSettingTemplateComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
