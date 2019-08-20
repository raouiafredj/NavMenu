import React, { Component } from 'react';
import './style.css';

const navbar = [{ link: '#', title: 'Home', isActive: true },

{
    link: '#', title: 'Services', isActive: false,
    submenu: [{ link: '#', title: 'For entrepreneurs' },
    { link: '#', title: 'For students' },
    { link: '#', title: 'For hobbyists' }]
},

{ link: '#', title: 'Contact', isActive: false }

]

const list = navbar.map(el =>
    <div>

        <p  className="nav-item">
        
        <a className="nav-item1" href={el.link} >
        {el.title}
        
       </a>
        
       
        <p className="nav-item2">
            {
                el.submenu && el.submenu.map(

                  

                      el => <div>{el.title}</div>
                   
                    
                          

                

                   


                )
            }
        </p>
        </p>
    </div>)




class Navmenu extends Component {
    render() {

        return (
            <div style={{color:'black'}} className="navbar">

               
                {list}



            </div>
        );
    }
}

export default Navmenu;