import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LoginForLooking from "./pages/LoginForLooking";
import LoginForOffering from "./pages/LoginForOffering";
import FindHomes from "./pages/FindHomes";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/lookinglogin", element: <LoginForLooking /> },
    { path: "/offeringlogin", element: <LoginForOffering /> },
    {path: "/findhomes", element: <FindHomes />},
]);

export default router;