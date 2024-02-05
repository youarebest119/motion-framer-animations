import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/Layout/Layout";
import Homepage from "./components/pages/Homepage/Homepage";

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Homepage />,
                },
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Application;