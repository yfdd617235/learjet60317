import React from 'react';
// import { Nav } from 'react-bootstrap';
import { BsDownload } from "react-icons/bs";
import './navbar.css'


const NavBar = ({ onNavItemSelect }) => {
  return (
    <>
    <div className='nav-info'>
      <div>
        <h1>LEARJET 60-317</h1>
        <h3>Registry: FAC-1216</h3>
        <p>Damage chart - Dent and Buckle</p>
      </div> <br />

      {/* <div>
        <Nav.Link className='link' onClick={() => onNavItemSelect('aboutMe')} >About Me</Nav.Link>
        <Nav.Link className='link' onClick={() => onNavItemSelect('experience')} >Experience</Nav.Link>
        <Nav.Link className='link' onClick={() => onNavItemSelect('projects')} >Projects</Nav.Link>
      </div> */}


      <div className='ref-doc'>
        <h4>Reference Documents</h4>
        <a className='download_doc' href='/downloads/52-Doors.zip' download><BsDownload />  52-Doors </a>
        <a className='download_doc' href='/downloads/53-Fuselage.zip' download><BsDownload /> 53-Fuselage</a>
        <a className='download_doc' href='/downloads/54-Nacelles_Pylons.zip' download><BsDownload /> 54-Nacelles_Pylons</a>
        <a className='download_doc' href='/downloads/55-Stabilizers.zip' download><BsDownload /> 55-Stabilizers</a>
        <a className='download_doc' href='/downloads/56-Windows.zip' download><BsDownload /> 56-Windows</a>
        <a className='download_doc' href='/downloads/57-Wings.zip' download><BsDownload /> 57-Wings</a>
      </div>
    </div>
    </>
  );
};

export default NavBar;