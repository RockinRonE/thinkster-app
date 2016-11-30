import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TodolistPage } from '../pages/todolist-page/todolist-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodolistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodolistPage
  ],
  providers: []
})
export class AppModule {}
