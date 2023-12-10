import React, { useRef } from 'react';
import NavBar from '../navBar/NavBar';
import Block1 from '../block1/Block1';
import ExcelViewer from '../excelviewer/Excelviewer';
// import Projects from '../projects/Projects';
// import Experience from '../experience/Experience';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      <div className='left-col'>
        <NavBar onNavItemSelect={handleNavItemSelect} />
      </div>

      <div className='right-col'>
          <div>
            <Block1 />
          </div>
          <div>
          <ExcelViewer/>
          </div>

      </div>

    </div>
  );
};

export default Navigator;

