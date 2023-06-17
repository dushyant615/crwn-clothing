import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () =>{
  return(
    <div>
      <div>
        <h1>I am navigation bar</h1>
      </div>
      <Outlet/>
    </div>
  )
}

const Shop = () =>{
  return <h1>I am the shop page</h1>
}

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
      </Route>      
    </Routes>
  )
}

export default App;
