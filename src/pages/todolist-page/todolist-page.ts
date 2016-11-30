import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GrocerylistPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'todolist-page',
  templateUrl: 'todolist-page.html'
})
export class TodolistPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TodolistPagePage Page');
  }

}
