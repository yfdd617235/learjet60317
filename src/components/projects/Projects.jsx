import React from 'react'
import * as Icon from 'react-icons/fa'
import imgP6 from './imgs/imgP6.png'
import imgP5 from './imgs/imgP5.png'
import imgP4 from './imgs/imgP4.png'
import imgP3 from './imgs/imgP3.png'
import imgP2 from './imgs/imgP2.png'
import imgP1 from './imgs/imgP1.png'
import './projects.css'

function Projects() {
    return (
        <div className='projects'>
            <h4>Projects</h4>

            <div className='row'>
            <img className="d-block w-100 img-fluid" src={imgP6} alt="First slide" />
                <div className='info-exp'>
                    <h4 className='title'>Private Project - Panamerican Private Investments</h4>
                    <p >This project is a collection of source code focused on algorithmic trading and artificial intelligence. It provides implementations of algorithms and automated trading strategies that use AI techniques such as machine learning and deep learning to make decisions in the financial markets. </p>
                    <div className='contact-icons-p'>
                        <a className='icon-link-p' href="https://indexpanamericanprivateinvestment.netlify.app/wlkngoi3tgi34hg.html" target="_blank" rel="noreferrer"><Icon.FaLink /></a>
                    </div>
                </div>
            </div>

            <div className='row'>
            <img className="d-block w-100 img-fluid" src={imgP5} alt="First slide" />
                <div className='info-exp'>
                    <h4 className='title'>Ucamp Project # 5 (Boot-Camp project)</h4>
                    <p >This is an ecommerce APP for selling technology. The APP includes Frontend and Backend (FULLSTACK).
                        Some of the programs used: React.js, Express.js, Mongodb, React-bootstrap, Netlify for FRONTEND deploy, Render for BACKEND deploy and Visual Studio Code for coding</p>
                    <div className='contact-icons-p'>
                        <a className='icon-link-p' href="https://github.com/yfdd617235/project_5_ecommerce_APP.git" target="_blank" rel="noreferrer"><Icon.FaGithub /></a>
                        <a className='icon-link-p' href="https://ecommerce-project5.netlify.app/" target="_blank" rel="noreferrer"><Icon.FaLink /></a>
                    </div>
                </div>
            </div>

            <div className='row'>
            <img className="d-block w-100 img-fluid" src={imgP4} alt="First slide" />
                <div className='info-exp'>
                    <h4 className='title'>Ucamp Project # 4 (Boot-Camp project)</h4>
                    <p >This is a web page of a restaurant. It uses HTML, JS, CSS, React, Firebase, Firestore, bootstrap and react-bootstrap.</p>
                    <div className='contact-icons-p'>
                        <a className='icon-link-p' href="https://github.com/yfdd617235/project_4_Restaurant_APP.git" target="_blank" rel="noreferrer"><Icon.FaGithub /></a>
                        <a className='icon-link-p' href="https://texasgrill.netlify.app/" target="_blank" rel="noreferrer"><Icon.FaLink /></a>
                    </div>
                </div>
            </div>

            <div className='row'>
            <img className="d-block w-100 img-fluid" src={imgP3} alt="First slide" />
                <div className='info-exp'>
                    <h4 className='title'>Ucamp Project # 3 (Boot-Camp project)</h4>
                    <p >This project uses Axios to get database of POKEAPI and display that information on chartjs, imgs and a table.</p>
                    <div className='contact-icons-p'>
                        <a className='icon-link-p' href="https://github.com/yfdd617235/Project_3_API.git" target="_blank" rel="noreferrer"><Icon.FaGithub /></a>
                        <a className='icon-link-p' href="https://project3pokeapi.netlify.app/" target="_blank" rel="noreferrer"><Icon.FaLink /></a>
                    </div>
                </div>
            </div>

            <div className='row'>
            <img className="d-block w-100 img-fluid" src={imgP2} alt="First slide" />
                <div className='info-exp'>
                    <h4 className='title'>Ucamp Project # 2 (Boot-Camp project)</h4>
                    <p >This is a Website made with HTML, CSS ans Javascript. Which reflects and is useful for the CRUD methodology.</p>
                    <div className='contact-icons-p'>
                        <a className='icon-link-p' href="https://github.com/yfdd617235/Proyect_2_CRUD.git" target="_blank" rel="noreferrer"><Icon.FaGithub /></a>
                        <a className='icon-link-p' href="https://leafy-cascaron-bfd1ec.netlify.app/" target="_blank" rel="noreferrer"><Icon.FaLink /></a>
                    </div>
                </div>
            </div>

            <div className='row'>
            <img className="d-block w-100 img-fluid" src={imgP1} alt="First slide" />
                <div className='info-exp'>
                    <h4 className='title'>Ucamp Project # 1 (Boot-Camp project)</h4>
                    <p >This is a simple landing page. The first project of the Bootcamp. Learning to use HTML ans CSS</p>
                    <div className='contact-icons-p'>
                        <a className='icon-link-p' href="https://github.com/yfdd617235/Proyect_1_landing_page.git" target="_blank" rel="noreferrer"><Icon.FaGithub /></a>
                        <a className='icon-link-p' href="https://exquisite-trifle-621849.netlify.app/" target="_blank" rel="noreferrer"><Icon.FaLink /></a>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Projects