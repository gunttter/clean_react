import Todos from "./Pages/Todos";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { TodoService } from "./Domain/Todos/service";
import { TodoApiMock } from "./Data/Api/todo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Todos {...new TodoService(new TodoApiMock)} />
    }
]);