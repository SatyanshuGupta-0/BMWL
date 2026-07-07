import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Applayout =()=>{
    return(
        <>
        <Navbar/>
        <div className="h-16 w-full"></div>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Applayout