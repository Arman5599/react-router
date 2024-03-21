
import React from "react";
import { BrowserRouter as Router,  Link, Routes, Route,} from "react-router-dom";
import './App.css';
import logo from "./imagess/logo.jpg";
import Mercedeslogo from "./download.png"
 import Part1 from "./pages/Part1";


function App() {
  return (
    <Router>
     <div class="App">
      <nav>
        <img src={logo} alt="" className="logo" />
        <ul>
          <li> <Link to="/">Home</Link>  </li>
          <li> <Link to="/Eclass">Eclass</Link></li>
          <li > <Link to="/Sclass">Sclass</Link></li>
          <li > <Link to="/Cclass">Cclass</Link> </li>
        </ul>
            </nav>
    <div className="content">
        <h1 className="anim">Mercedes  Evolution</h1>
        <p className="anim">Designed by Bruno Sacco, head of styling at Mercedes-Benz from 1975 to 1999, the W201 debuted at the 1982 Paris Motor show. Manufactured in both Bremen and Sindelfingen, Germany, production reached 1,879,629 over its eleven-year model life</p>
        
    </div>
    <img src={Mercedeslogo} className="Mercedes-img anim" alt=""></img>
    
</div>

   <Routes>
   <Route path="/"  />
    <Route path="/Eclass" element={<Part1/>}/>  
    <Route path="/Sclass"  />
    <Route path="/Cclass"/>

   </Routes>
    </Router>
  );
}

export default App;
