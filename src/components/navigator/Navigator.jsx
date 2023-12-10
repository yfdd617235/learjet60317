import React, { useRef } from 'react';
import NavBar from '../navBar/NavBar';
import Block1 from '../block1/Block1';
import ExcelViewer from '../excelviewer/Excelviewer';
import Referencedocs from '../dropdown/Referencedocs';

import './navigator.css';

const Navigator = () => {
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavItemSelect = (item) => {
    switch (item) {
      case 'aboutMe':
        scrollToRef(aboutMeRef);
        break;
      case 'experience':
        scrollToRef(experienceRef);
        break;
      case 'projects':
        scrollToRef(projectsRef);
        break;
      default:
        break;
    }
  };

  return (
    <div className='screem'>
      <div className='left-col'>
        <NavBar onNavItemSelect={handleNavItemSelect} />
      </div>
      <div className='right-col'>
        <div>
          <Block1 />
        </div>
        <div>
          <ExcelViewer />
        </div>
      </div>
      <div className='footer-container'>
        <Referencedocs/>
      </div>
        
    </div>
  );
};

export default Navigator;

