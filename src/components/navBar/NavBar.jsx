import React from 'react';
import Referencedocs from '../dropdown/Referencedocs'
import './navbar.css'


function NavBar() {
  return (
    <>
      <div className='nav-info'>
        
        <div>
          <h3>LEARJET 60-317</h3>
          <h5>Registry: FAC-1216</h5>
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

