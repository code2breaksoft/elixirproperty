import Home from "./pages/Home/Home";
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Services from "./pages/services/services";
import Faq from "./pages/faq/faq";
import Blog from "./pages/blog/blog";
import InspectionScope from "./pages/inspectionScope/inscope";
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
function App() {
  const [countries,setCountries] = useState();
    return ( 
    < div className = "App" >
            <Router>
              <Routes>
                <Route path="/" element={<Home country={countries}/>}></Route>
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