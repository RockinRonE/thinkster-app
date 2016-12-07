export class TodolistModel {
    
    constructor(public location: string, public todos: any[]) {
       
    }

    addTodo(title): void {
        this.todos.push ({
            title: title,
            checked: false 
        });
    }

    setLocation(location): void {
        this.location = location; 
    }

    renameTodo(todo, title): void {

        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos[index].title = title; 
        }
    }

    deleteTodo(todo): void {

        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1); 
        }
    }

}

