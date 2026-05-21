import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AboutPage from "../Pages/About/AboutPage";
import HomePage from "../Pages/Home/HomePage";
import Services from "../Pages/Services/Services";
import CoverPage from "../Pages/CoverPage/CoverPage";
import Priching from "../Pages/Pricing/Priching";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Error404 from "../Pages/Error/Error404";
import AllError from "../Pages/AllError/AllError";
import AuthLayout from "../Layouts/AuthLayout";
import Registation from "../Pages/Auth/Registation";
import LogIn from "../Pages/Auth/LogIn";
import PrivateRoutes from "./PrivateRoutes";
import CoverPage2 from "../Pages/CoverPage/CoverPage2";
import SendAPercel from "../Pages/PercelSend/SendAPercel";
const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        errorElement:<AllError></AllError>,
        children:[
            {index:true,Component:HomePage},
            {path:'aboutPage',Component:AboutPage},
            {path:'services',element:<Services></Services>},
            {path:'coverage',element:<PrivateRoutes><CoverPage></CoverPage></PrivateRoutes>,loader:()=>fetch('/servicesHouse.json').then(res=>res.json())},
            {path:'coverage2',Component:CoverPage2},
            {path:'percelSend',element:<PrivateRoutes><SendAPercel></SendAPercel></PrivateRoutes>},
            {path:'aboutus',element:<AboutPage></AboutPage>},
            {path:'pricing',element:<Priching></Priching>},
            {path:'blog',element:<Blog></Blog>},
            {path:'contact',element:<Contact></Contact>},
            {path:'*',Component:Error404}
        ]
    },
    {
        path:'/',
        Component:AuthLayout,
        children:[
            {path:'registation',element:<Registation></Registation>},
            {path:'login',element:<LogIn></LogIn>}
        ]
    }
])
export default router