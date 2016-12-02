import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'todolist-page',
  templateUrl: 'todolist-page.html'
})

export class TodolistPage {

  checklist: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.checklist = this.navParams.get('todolist');
  }

}
