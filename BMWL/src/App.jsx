import {Route , Routes} from "react-router-dom";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus"
import Infrastructure from "./pages/Infrastructure"
import Products from "./pages/Products"
import Quality from "./pages/Quality"
import Sustainabilit from "./pages/Sustainabilit"
import Applayout from "./Applayout";
import Contactus from "./pages/Contactus";

const App =()=>{
  return(
    <>
    <Routes>
      <Route path="/" element={<Applayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/infrastructure" element={<Infrastructure/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/quality" element={<Quality/>}/>
      <Route path="/sustainabilit" element={<Sustainabilit/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;