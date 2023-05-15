import { createBrowserRouter } from "react-router-dom"  
import Marketplace from "../Pages/Marketplace.jsx";
import Rankings from "../Pages/Rankings.jsx";
import App from "../App";
import AddArtist from "../Pages/AddArtist.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/marketplace",
        element: <Marketplace />,
    },
    {
        path: "/rankings",
        element: <Rankings />,
    },
    {
        path: "/addartist",
        element: <AddArtist />,
    },
]);

export default router;