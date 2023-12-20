import React from 'react';
import { BsDownload } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './referencedocs.css';

function Referencedocs() {
  return (
    <div className='btns'>
      <Dropdown className="d-inline" autoClose="outside">
        <Dropdown.Toggle className='ref-doc customddb' id="dropdown-autoclose-outside" style={{ color: 'white', fontSize: '14px' }}>Dent & Buckle Report</Dropdown.Toggle>
        <Dropdown.Menu className='ref-doc customddb' style={{ fontSize: '14px' }}>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/D&B TEMPLATE.xlsx' download><BsDownload /> D&B_Excel</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/D&B_Report.pdf'><BsDownload /> D&B_PDF</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/Inspection_Report.pdf'><BsDownload /> Inspection_Report</Dropdown.Item>
        </Dropdown.Menu>

      </Dropdown>
      <Dropdown className="d-inline" autoClose="outside">
        <Dropdown.Toggle className='ref-doc customddb' id="dropdown-autoclose-outside" style={{ color: 'white', fontSize: '14px' }}>Reference Documents</Dropdown.Toggle>
        <Dropdown.Menu className='ref-doc customddb' style={{fontSize: '14px' }}>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/52-Doors.zip' download><BsDownload />  52-Doors </Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/53-Fuselage.zip' download><BsDownload /> 53-Fuselage</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/54-Nacelles_Pylons.zip' download><BsDownload /> 54-Nacelles_Pylons</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/55-Stabilizers.zip' download><BsDownload /> 55-Stabilizers</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/56-Windows.zip' download><BsDownload /> 56-Windows</Dropdown.Item>
          <Dropdown.Item style={{ color: 'black' }} href='/downloads/57-Wings.zip' download><BsDownload /> 57-Wings</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant='primary' className='btn-id'style={{ fontSize: '14px' }}><a href="/downloads/identification.pdf">Aircraft Identification</a></Button>
    </div>

  )
}

export default Referencedocs