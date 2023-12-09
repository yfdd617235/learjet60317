import React from 'react';
// import { Nav } from 'react-bootstrap';
import { toast} from 'react-toastify';
import * as Icon from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './navbar.css'
import doorsFile from './52-Doors.rar';

function mailInfo (){
  toast.success('Email: yosefdavid91@gmail.com', {
    position: 'top-center',
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

function handleDownload (){
  console.log('Clic en el enlace "Doors"');
  window.location.href = doorsFile;
}

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
        <a href="{doorsFile}" onClick={handleDownload} rel="noopener noreferrer">Doors</a>
        <a className='icon-link' href="https://github.com/yfdd617235" rel="noreferrer"><Icon.FaGithub /></a>
        <Button className='icon-link' onClick={mailInfo} rel="noreferrer"><Icon.FaMailBulk /></Button>
      </div>
    </div>
    </>
  );
};

export default NavBar;