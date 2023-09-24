import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = ()=> {
  // below we have implemented nested routing, the <outlet/> 
  // in main navigtion component will be replaced by home and shop 
  // page when its path is matched. eg:- /home, /shop
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        {/* index below allows to set it as a base component of <Navigation/>, when only slash'/' is there*/}
        <Route index={true} element={<Home/>}/> 
        <Route path="shop" element={<Shop/>}/> 
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>      
    </Routes>
  )
}

export default App;
