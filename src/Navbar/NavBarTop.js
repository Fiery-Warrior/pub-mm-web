import React from 'react';

import { MdMenu } from "react-icons/md"
import './App.css';



function NavBarTop() {
  
 
  return (
    <div className="App">
        <div className='flex-container-top'>

            <section className='icon-hamburger-menu' id ='ham-menu'>
              <MdMenu/>
            </section>



        </div>
    </div>
    
  );
}

export default NavBarTop;