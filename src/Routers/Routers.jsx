import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home'
import Apps from '../Pages/AllApps/Apps';
import Installed from '../Pages/Installed/Installed';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AppNotFound from '../Pages/AppNotFound/AppNotFound';
import AppDetail from '../Pages/AppDetail/AppDetail';

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