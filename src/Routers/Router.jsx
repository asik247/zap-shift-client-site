import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AboutPage from "../Pages/About/AboutPage";
import HomePage from "../Pages/Home/HomePage";
import Services from "../Pages/Services/Services";
import CoverPage from "../Pages/CoverPage/CoverPage";
import Priching from "../Pages/Pricing/Priching";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        children:[
            {index:true,Component:HomePage},
            {path:'aboutPage',Component:AboutPage},
            {path:'services',element:<Services></Services>},
            {path:'coverage',element:<CoverPage></CoverPage>},
            {path:'aboutus',element:<AboutPage></AboutPage>},
            {path:'pricing',element:<Priching></Priching>},
            {path:'blog',element:<Blog></Blog>},
            {path:'contact',element:<Contact></Contact>}
        ]
    }
])
export default router