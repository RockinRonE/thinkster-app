import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TodolistPage } from '../todolist-page/todolist-page';

import { TodolistModel } from '../../models/todolist-model';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  todolists: TodolistModel[] = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dataService: Data) {
    
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

            this.save(); 

            console.log('Data saved!');
          }
        }
      ]
    });
    prompt.present(); 
  }

  renameLocationlist(location): void {

    let prompt = this.alertCtrl.create({
      title: 'Rename Location',
      message: 'Enter the new location name',
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

            let index = this.todolists.indexOf(location);

            if (index > -1) {
              this.todolists[index].setLocation(data.location);
            }

          }
        }
      ]
    });

    prompt.present();
  }

  deleteLocationlist(todolist): void {

    let index = this.todolists.indexOf(todolist);

    if (index > -1) {
      this.todolists.splice(index, 1); 
    }
  }

}

 
