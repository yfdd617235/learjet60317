import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ChartComponent from './ChartComponent'
import img1 from '../../imgs/LearjetISOFRONT.jpeg'
import img2 from '../../imgs/LearjetISOBACK.jpeg'
import img3 from '../../imgs/LearjetISOFRONT1.jpeg'
import img4 from '../../imgs/LearjetISOFRONTDOWN1.jpeg'
import './carouselfn.css'
import './block1.css'

function Block1() {
  return (
    <div className='block1'>
      <div className='carouseldiv'>
      <Carousel >
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
          {/* <Carousel.Caption>
            <h5>Cell Phones</h5>
            <p>Best Cell Phones at the best prices you can find.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img2} alt="First slide" />
          {/* <Carousel.Caption>
            <h5>Laptops</h5>
            <p>Most powerful and latest laptops of the year.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img3} alt="First slide" />
          {/* <Carousel.Caption>
            <h5>Smart TV</h5>
            <p>Amoled TVs with million of color and a real image.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img4} alt="First slide" />
          {/* <Carousel.Caption>
            <h5>Smart Watch</h5>
            <p>Carry out the best technology everywhere with the best SmartWatches.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      </div>

      <div className='chartjsdiv'>
      <ChartComponent></ChartComponent>
      </div>

    </div>

  )
}

export default Block1;