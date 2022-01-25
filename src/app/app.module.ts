import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { TasksModule } from './components/tasks/tasks.module';
import { AppRoutingModule } from './app-routing.module';

export const TASKS_URL: InjectionToken<string> = new InjectionToken<string>("Tasks API URL");

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    TasksModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: TASKS_URL,
      useValue: "http://localhost:3000/todos"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
