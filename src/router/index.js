import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";


export const privateRoutes = [
    {path: '/about', element: About, exact: true, key: 1},
    {path: '/posts', element: Posts, exact: true, key: 2},
    {path: '/posts/:id', element: PostIdPages, exact: true, key: 3},
    {path: '*', element: Posts, exact: true, key: 4}
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true, key: 5},
    {path: '*', element: Login, exact: true, key: 4}
]