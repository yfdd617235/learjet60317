import React from 'react';
// import { Nav } from 'react-bootstrap';
import { BsDownload } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
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
        <Dropdown className="d-inline" autoClose="outside">
        <Dropdown.Toggle  className='ref-doc customddb' id="dropdown-autoclose-outside" style={{ color: 'white',fontSize: '14px' }}>Reference Documents</Dropdown.Toggle>
          <Dropdown.Menu className='ref-doc customddb'style={{ backgroundColor: '#9AC4E5', color: 'black', fontSize: '14px'}}>
            <Dropdown.Item style={{ color: 'black'}} href='/downloads/52-Doors.zip' download><BsDownload />  52-Doors </Dropdown.Item>
            <Dropdown.Item style={{ color: 'black'}} href='/downloads/53-Fuselage.zip' download><BsDownload /> 53-Fuselage</Dropdown.Item>
            <Dropdown.Item style={{ color: 'black'}} href='/downloads/54-Nacelles_Pylons.zip' download><BsDownload /> 54-Nacelles_Pylons</Dropdown.Item>
            <Dropdown.Item style={{ color: 'black'}} href='/downloads/55-Stabilizers.zip' download><BsDownload /> 55-Stabilizers</Dropdown.Item>
            <Dropdown.Item style={{ color: 'black'}} href='/downloads/56-Windows.zip' download><BsDownload /> 56-Windows</Dropdown.Item>
            <Dropdown.Item style={{ color: 'black'}} href='/downloads/57-Wings.zip' download><BsDownload /> 57-Wings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default NavBar;

