import React, { FC, useEffect, useState } from 'react'
import { TodoModel } from '../../Domain/Todos/entity'
import { TodoService } from '../../Domain/Todos/service'
export const Todos: FC<TodoService> = ({ service }): JSX.Element => {
    const [todos, setTodos] = useState<Array<TodoModel>>();
    useEffect(() => {
        setTodos(service.readTodos());
    },)
    return (
        <div>
            {todos.map((value: TodoModel, index: number, array: TodoModel[]) => { }, null)}
        </div>
    )
}
