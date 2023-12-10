import React from 'react';
import Referencedocs from '../dropdown/Referencedocs'
import './navbar.css'


function NavBar() {
  return (
    <>
      <div className='nav-info'>
        
        <div>
          <h2>LEARJET 60-317</h2>
          <h4>Registry: FAC-1216</h4>
          <p>Damage chart - Dent and Buckle</p>
        </div>

        <div className='referencedocs-container'>
          <Referencedocs ></Referencedocs>
        </div>

      </div>
    </>
  );
};

export default NavBar;

