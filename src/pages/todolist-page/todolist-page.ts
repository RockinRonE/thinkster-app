import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'todolist-page',
  templateUrl: 'todolist-page.html'
})

export class TodolistPage {

  todolist: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.todolist = this.navParams.get('todolist');
  }

  addItem(): void {

    let prompt = this.alertCtrl.create({
      title: 'Add Todo',
      message: 'Enter your todo for this location below:',
      inputs: [
        {
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.todolist.addTodo(data.name);
          }
        }
      ]
    });

    prompt.present(); 
  }

  renameTodo(todo): void {

    let prompt = this.alertCtrl.create({
      title: 'Rename Todo',
      message: 'Enter the new Todo name below:',
      inputs: [
        {
          name: 'name'
        }
      ],
      buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Save',
        handler: data => {
          this.todolist.renameTodo(todo, data.name)
        }
      }
      ]
    });
    
    prompt.present(); 
  }

  removeTodo(todo): void {
    this.todolist.deleteTodo(todo);
  }

}
