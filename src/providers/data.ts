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
    console.log(data);
    let newData = JSON.stringify(data);
    // console.log(data);
    this.storage.set('todolist', data);
  }

  getData(): Promise<any> {
    return this.storage.get('todolist');
  }

}
