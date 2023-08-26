import React from 'react';

const AttendanceTable = ({ data }) => (
  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Registration No</th>
        <th>Date</th>
        <th>Subject</th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry, idx) => (
        <tr key={idx}>
          <td>{entry.name}</td>
          <td>{entry.regNo}</td>
          <td>{entry.date}</td>
          <td>{entry.subject}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default AttendanceTable;
