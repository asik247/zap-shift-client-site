import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AboutPage from "../Pages/About/AboutPage";
import HomePage from "../Pages/Home/HomePage";
const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        children:[
            {index:true,Component:HomePage},
            {path:'aboutPage',Component:AboutPage}
        ]
    }
])
export default router