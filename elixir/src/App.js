import Home from "./pages/Home/Home";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Services from "./pages/services/services";

function App() {
    return ( 
    < div className = "App" >
            <Router>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/services/*" element={<Services/>}>
                </Route>
              </Routes>
            </Router>
        </div>
    );
}

export default App;