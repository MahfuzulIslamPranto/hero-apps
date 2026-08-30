import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';

import { lazy } from "react";

const Home = lazy(()=>import('../Pages/Home/Home'));
const Apps = lazy(()=>import('../Pages/AllApps/Apps'));
const Installed = lazy(()=>import('../Pages/Installed/Installed'));
const AppDetail = lazy(()=>import('../Pages/AppDetail/AppDetail'));
const ErrorPage = lazy(() => import('../Pages/ErrorPage/ErrorPage'));
const AppNotFound = lazy(() => import('../Pages/AppNotFound/AppNotFound'));

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children:[
            {
                index: true,
                loader: ()=>fetch('/TrendingApps.json'),
                Component: Home
            },
            {
                path:'/Apps',
                loader: () => fetch('/TrendingApps.json'),
                Component: Apps
            },
            {
                path:'/Installed',
                loader: () => fetch('/TrendingApps.json'),
                Component: Installed
            },
            {
                path:'/*',
                Component: ErrorPage
            },
            {
                path:'/AppNotFound',
                Component: AppNotFound
            },
            {
                path:'/Apps/:appId',
                loader: () => fetch('/TrendingApps.json'),
                Component:AppDetail
            }
        ]
    }
])