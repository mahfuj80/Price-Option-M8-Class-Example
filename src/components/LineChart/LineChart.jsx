// import React from 'react';
// import PropTypes from 'prop-types';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
  const subjectMarksData = [
    { id: 1, name: 'John Doe', math: 85, physics: 78, chemistry: 90 },
    { id: 2, name: 'Emily Smith', math: 78, physics: 82, chemistry: 85 },
    { id: 3, name: 'Michael Johnson', math: 92, physics: 88, chemistry: 91 },
    { id: 4, name: 'Sarah Davis', math: 88, physics: 85, chemistry: 89 },
    { id: 5, name: 'Daniel Brown', math: 95, physics: 90, chemistry: 94 },
    { id: 6, name: 'Jessica Taylor', math: 80, physics: 75, chemistry: 82 },
    { id: 7, name: 'Brian Anderson', math: 87, physics: 80, chemistry: 86 },
    { id: 8, name: 'Olivia Clark', math: 90, physics: 85, chemistry: 88 },
    { id: 9, name: 'Samuel Lee', math: 84, physics: 79, chemistry: 83 },
    { id: 10, name: 'Sophia Martinez', math: 89, physics: 84, chemistry: 87 },
  ];
  return (
    <div>
      <LChart width={800} height={400} data={subjectMarksData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={'math'} stroke="red"></Line>
        <Line dataKey={'physics'} stroke="green"></Line>
      </LChart>
    </div>
  );
};

// LineChart.propTypes = {};

export default LineChart;
