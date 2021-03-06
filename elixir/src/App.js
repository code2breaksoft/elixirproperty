import Home from "./pages/Home/Home";
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Services from "./pages/services/services";
import Faq from "./pages/faq/faq";
import Blog from "./pages/blog/blog";
import InspectionScope from "./pages/inspectionScope/inscope";
import { useState } from "react";
import Admin from "./pages/admin/home";
import ScrollToTop from "react-scroll-to-top";
function App() {
  const [countries,setCountries] = useState();
    return ( 
    <div className = "App" >
      <ScrollToTop smooth color='white' style={{backgroundColor:"#f85359"}}/>
            <Router>
              <Routes>
                <Route path="/" element={<Home country={countries}/>}></Route>
                <Route path="/services/*" element={<Services/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route  path="/admin" element={<Admin/>}></Route>
                <Route path="/inspection-scope" element={<InspectionScope/>}></Route>
              </Routes>
            </Router>
        </div>
    );
}

export default App;