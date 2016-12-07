import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {

  constructor(public storage: Storage) {
    
  }

  save(data): void {

    // let saveData = [];

    // data.forEach((todolist) => {
    //   saveData.push({
    //     location: todolist.location,
    //     todos: todolist.todos
    //   });
    // });

    let newData = JSON.stringify(data);
    this.storage.set('todolist', newData);
  }

}
