import { RouteObject } from "react-router-dom";

import Layout from "@/pages/Layout";
import Home from "./pages/Home";

export const ROUTES: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ]
    }
];
