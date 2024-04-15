import { RouteObject } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";

import Home from "./pages/Home";

export const ROUTES: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ]
    }
];
