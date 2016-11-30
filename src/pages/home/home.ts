import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TodolistPage } from '../todolist-page/todolist-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  viewChecklist(checklist): void {
    this.navCtrl.push(TodolistPage, {
      checklist: checklist
    });
  }

}

 
