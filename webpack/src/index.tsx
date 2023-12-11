import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "@/pages/about";
import {Shop} from "@/pages/shop";
import {Suspense} from "react";

const root = document.getElementById('root')

if(!root) {
    throw new Error('Root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/About',
                element: <Suspense fallback={'Loading...'}><About /></Suspense>
            },
            {
                path: '/Shop',
                element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
            }
        ]
    },
])

container.render(
    <RouterProvider router={router} />
)