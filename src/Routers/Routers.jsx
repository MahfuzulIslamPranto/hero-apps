import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home'
import Apps from '../Pages/AllApps/Apps';

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        element: <ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                loader: ()=>fetch('/TrendingApps.json'),
                path: '/',
                Component: Home
            },
            {
                path:'/Apps',
                loader: () => fetch('/TrendingApps.json'),
                Component: Apps
            }
        ]
    }
])