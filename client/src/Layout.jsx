

import {Outlet} from "react-router-dom"
import TopMenu from "./Components/TopMenu"
import Footer from "./Pages/Footer"
const Layout=()=>{
    return(
        <>
        <div>
                  <TopMenu/>
        </div>
        <div>
                    <Outlet/>
        </div>
        <div>
               <Footer/>
        </div>
            
        </>
    )
}
export default Layout