import React from "react";
import { Route, Routes} from "react-router-dom";
import Navvbar from "./components/navbar";
import Home from "./components/home";
import Loginpage from "./components/loginpage";
import Registerpage from "./components/registerpage";
import Aboutus from "./components/about";
import Fplace from "./pages/fplaces"
import Fdish from "./pages/fdish"
import Fpeople from "./pages/fpeople"
import Dailyd from "./pages/dailydairy"
import Story from "./pages/story"
import Firstpage from "./components/firstpage";
function App() {
  return (
    <>
    <Navvbar/>
    <Routes>
    <Route path="/" element={<Firstpage/>} />
    <Route path="/home" element={<Home/>}/>
    <Route path="/loginpage" element={<Loginpage/>}/>
    <Route path="/registerpage" element={<Registerpage/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/fplacepage" element={<Fplace/>}/>
    <Route path="/fdishpage" element={<Fdish/>}/>
    <Route path="/fpeoplepage" element={<Fpeople/>}/>
    <Route path="/dailydpage" element={<Dailyd/>}/>
    <Route path="/storypage" element={<Story/>}/>
    </Routes>
    </>
  );
}
export default App;