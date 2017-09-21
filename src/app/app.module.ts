import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './binding/event.component';
import { ProjectSettingTemplateComponent } from './project-setting-template/projectSettingTemplate.component';

import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/customPipe.component';
import { CapitalizePipe } from './custom-pipe/capitalize.pipe';
import { ArrayNumberPipe } from './custom-pipe/arrayNumber.pipe';
import { SortArrayPipe } from './custom-pipe/sortArray.pipe';
import { SummaryString } from './custom-pipe/summaryString.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ProjectSettingTemplateComponent,
    PipeComponent,
    CustomPipeComponent,
    CapitalizePipe,
    ArrayNumberPipe,
    SortArrayPipe,
    SummaryString
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
