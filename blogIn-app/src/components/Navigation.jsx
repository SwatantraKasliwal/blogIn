import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Create from "./Create";

function Navigation(){
    return(
        <Router>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">Create a blog</Link>
                <Link to="/about">About Us</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
        </Router>
    )
}

export default Navigation;