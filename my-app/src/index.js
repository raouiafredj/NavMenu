import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navmenu from './Navmenu';



// const menuItem = {link: '#', title: 'Home', isActive: true}
// const menuItem2 = {link: '#', title: 'Services', isActive: false,
// submenu:[{link:'#',title:'for entrepreneurs'},
// {link:'#',title:'For students'},
// {link:'#',title:'For hobbyists'}]}
// const menuItem3 = {link: '#', title: 'Contact', isActive: false}





// const NavItem = (props) =>
//   <a
//     className="nav-item"
//     style={{color: props.item.isActive ? '#6bb09d' : 'black'}}
//     href={props.item.link}>
//       {props.item.title}
      
//   </a>
  

const Main = () => <div className="navitem">
  {/* <NavItem item={menuItem} />
  
  <NavItem item={menuItem2} />
  <NavItem item={menuItem3 } /> */}
 <Navmenu/>
 
  
</div>



ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
