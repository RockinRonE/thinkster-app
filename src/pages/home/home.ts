import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TodolistPage } from '../todolist-page/todolist-page';

import { TodolistModel } from '../../models/todolist-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  todolists: TodolistModel[] = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  viewTodolist(todolist): void {
    this.navCtrl.push(TodolistPage, {
      todolist: todolist
    });
  }

  addLocationlist(): void {

    let prompt = this.alertCtrl.create({
      title: 'New Location',
      message: 'Enter the name of your new location:',
      inputs: [
        {
          name: 'location'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            
            let newTodolist = new TodolistModel(data.location, []);
            this.todolists.push(newTodolist);

            console.log('Data saved!');
          }
        }
      ]
    });
    prompt.present(); 
  }

}

 
