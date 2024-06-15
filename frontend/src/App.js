import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import PropertyData from './screens/PropertyData';
import CreatePd from './components/CreatePd';
import UpdatePd from './components/UpdatePd';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/js/bootstrap.min.js';
import { PropertyProvider } from './components/PropertyContext';


function App() {
  return (
  <PropertyProvider><div>
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path='/propertdata' element={<PropertyData/>}/>
            <Route exact path='/updatepd' element={<UpdatePd/>}/>
            <Route exact path='/createpd' element={<CreatePd/>}/>

          </Routes>
        </div>
      </Router>
  </div>
  </PropertyProvider>
  );
}

export default App;
