import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
import { Table
    // , Button 
} from 'react-bootstrap';
import './excelviewer.css'

const ExcelViewer = () => {
  const [excelData, setExcelData] = useState(null);

  useEffect(() => {
    const fetchExcelFile = async () => {
      try {
        const excelFilePath = 'downloads/D&B TEMPLATE1.xlsx';
        const response = await fetch(excelFilePath);
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        setExcelData(jsonData);
      } catch (error) {
        console.error('Error al cargar el archivo de Excel:', error);
      }
    };

    fetchExcelFile();
  }, []);

//   const downloadFile = () => {
//     const ws = XLSX.utils.json_to_sheet(excelData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//     const excelBlob = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });

//     saveAs(excelBlob, 'modifiedReport.xlsx');
//   };

  return (
    <div className='DBtable'>
      {excelData && (
        <div>
            <h4>Dent and Bucle table</h4>
          {/* <Button variant="primary" onClick={downloadFile}>
            Descargar Modificado
          </Button> */}

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                {excelData[0].map((cell, index) => (
                  <th key={index}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ExcelViewer;
