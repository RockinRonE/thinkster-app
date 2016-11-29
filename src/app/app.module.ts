import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { GrocerylistPage } from '../pages/grocerylist-page/grocerylist-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GrocerylistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GrocerylistPage
  ],
  providers: []
})
export class AppModule {}
