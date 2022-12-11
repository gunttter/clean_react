import { TodoModel } from "../../Domain/Todos/entity";
import { TodoApi } from "../../Domain/Todos/service";

export class TodoApiMock implements TodoApi {

    private todos: Array<TodoModel> = new Array;

    createTodo(input: TodoModel) {
        this.todos.push(input);
    }

    readTodos(): Array<TodoModel> {
        return this.todos;
    }

    deleteTodo(title: String) {
        for (let index = 0; index < this.todos.length; index++) {
            const element = this.todos[index];
            if (element.title == title) {
                this.todos.splice(index, 1);
            }
        }
    };
}