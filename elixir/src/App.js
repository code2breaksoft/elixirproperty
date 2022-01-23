import Home from "./pages/Home/Home";
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Services from "./pages/services/services";
import Faq from "./pages/faq/faq";
import Blog from "./pages/blog/blog";
import InspectionScope from "./pages/inspectionScope/inscope";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [countries,setCountries] = useState([]);

  useEffect(async()=>{
    let res = await axios.get("https://restcountries.com/v2/all");
    let data =  res.data.map((item)=>{
      return ({short:item.alpha3Code,name:item.name,code:item.callingCodes[0],flag:item.flag});
    });
    setCountries(data);
  },[]);
    return ( 
    < div className = "App" >
            <Router>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/services/*" element={<Services/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/inspection-scope" element={<InspectionScope/>}></Route>
              </Routes>
            </Router>
        </div>
    );
}

export default App;