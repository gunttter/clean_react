import { createTodoDTO } from "./dto";
import { TodoModel } from "./entity";

export interface TodoApi {
    createTodo(input: TodoModel): void;
    readTodos(): Array<TodoModel>;
    deleteTodo(title: String): void;
}
export class TodoService {

    private todoApi: TodoApi;

    // This is depency injection baby
    public constructor(todoApi: TodoApi) {
        if (todoApi == null) {
            throw new Error('todoApi is null');
        }
        this.todoApi = todoApi;
    }

    createTodo(input: createTodoDTO) {
        if (input.title == null) {
            throw new Error('title can not be empty');
        }
        if (input.description == null) {
            throw new Error('title can not be empty');
        }
        const todo: TodoModel = { title: input.title, description: input.description, createdAt: new Date() };
        this.todoApi.createTodo(todo);
    }

    readTodos(): Array<TodoModel> {
        return this.todoApi.readTodos();
    }

    deleteTodo(title: String) {
        if (title == null) {
            throw new Error('title can not be empty');
        }
        this.todoApi.deleteTodo(title);
    }
}