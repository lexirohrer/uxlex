import React from 'react';
import './App.css';
import Hello from './pages/hello';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Burger from './Burger'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";



const RightNav = ({ open }) => {
            
    if (open){
        return (
            <div className="navigation">
            <div class="burger">
              <Burger />
            </div>
    
            <Link to='/hello'>hello👋</Link>
            <Link to='/'>projects📱</Link>
            <Link to='/resume'>resume 🤓</Link>
            
          </div> 
        )
      }

      return <div></div>
    }
    
  
  export default RightNav