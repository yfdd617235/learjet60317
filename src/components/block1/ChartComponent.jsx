import React from 'react';
import { Bar } from 'react-chartjs-2';
import './block1.css'

const ChartComponent = () => {
  const labels = ["Doors", "Fuselage", "Nacelles_Pylons", "Stabilizers", "Windows", "Wings"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Reports',
      data: [1, 4, 0, 6, 2, 5],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        '#06549E',
        '#06549E',
        '#06549E',
        '#06549E',
        '#06549E',
        '#06549E'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className='chartarea'>
      <h6>Dent & Buckle Reports</h6>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
