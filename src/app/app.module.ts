import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TasksModule } from './components/tasks/tasks.module';
import { TaskDetailModule } from './components/task-detail/task-detail.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    TasksModule,
    TaskDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
