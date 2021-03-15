import { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Hello from './pages/hello';
import Projects from './pages/projects';
import Resume from './pages/resume';
import RightNav from './RightNav';

// function Burger (props){
    
//     if(props){
//         return
//             <div class="menu">
//                 <Switch>
//                 <Route path="/hello">
//                     <Hello />
//                 </Route>
//                 <Route exact path="/">
//                     <Projects />
//                 </Route>
//                 <Route path="/resume">
//                     <Resume />
//                 </Route>
//                 </Switch>
//             </div>
//     }     
// }

// const StyledBurger = styled.div`
// width: 2rem;
// height: 2rem;
// position: fixed;
// top: 15px;
// right: 20px;
// z-index: 20;
// display: none;

// @media (max-width: 768px) {
//   display: flex;
//   justify-content: space-around;
//   flex-flow: column nowrap;
// }
// div {
//   width: 2rem;
//   height: 0.25rem;
//   background-color: ${({ open }) => open ? '#ccc' : '#333'};
//   border-radius: 10px;
//   transform-origin: 1px;
//   transition: all 0.3s linear;
//   &:nth-child(1) {
//     transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//   }
//   &:nth-child(2) {
//     transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
//     opacity: ${({ open }) => open ? 0 : 1};
//   }
//   &:nth-child(3) {
//     transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//   }
// }
// `;

const Burger = () => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <button onClick={() => setOpen(!open)}>
            🍔
            {/* <i class="fas fa-check-circle" fa-lg></i> */}
            {/* Put UTF code for burger emoji here bc emoji may not show up in all browsers? */}
            </button>
        {/* <div open={open} >    
        </div> */}

        <RightNav open={open}/>
      </>
    )
  }
  
  export default Burger
