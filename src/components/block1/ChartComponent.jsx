import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = () => {
  const labels = ["Doors", "Fuselage", "Nacelles_Pylons", "Stabilizers", "Windows", "Wings"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
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
    <div>
      <h2>Dent & Buckle count</h2>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
