import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import loginForLooking from "./pages/loginForLooking";
import loginForOffering from "./pages/loginForOffering";

const router = createBrowserRouter([
    { path: "/", element: Home() },
    { path: "/lookinglogin", element: loginForLooking() },
    { path: "/offeringlogin", element: loginForOffering() }
]);

export default router;