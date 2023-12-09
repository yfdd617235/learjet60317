import React from 'react'
import './experience.css'

function Experience() {
    return (
        <div className='experience'>
            <h4>Experience</h4>

                <div className='row'>
                    <p className='info-date'>2023 - Present</p>
                    <div className='info-exp'>
                        <p >Work as freelance Web developer</p>
                        <p className='info-cod'>React.js - Express.js - JavaScript</p>
                    </div>
                </div>

                <div className='row'>
                    <p className='info-date'>2019 - Present</p>
                    <div className='info-exp'>
                        <p>Work as freelance creating robots for algorithmic trading</p>
                        <p className='info-cod'>MQL4 - MQL5</p>
                    </div>
                </div>

                <div className='row'>
                    <p className='info-date'>2015 - Present</p>
                    <div className='info-exp'>
                        <p>Engineering Manager - Engineering, Planning, Production Control, Reliability and database management</p>
                        <p className='info-cod'> Excel</p>
                    </div>
                </div>

                <div className='row'>
                    <p className='info-date'>2014 - 2015</p>
                    <div className='info-exp'>
                        <p >Quality Assurance Engineer - Database management</p>
                        <p className='info-cod'> Excel</p>
                    </div>
                </div>

            

        </div>

    )
}

export default Experience