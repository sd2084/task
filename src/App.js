import React, { useState } from 'react';
import './App.css';

// AttendanceForm Component
const AttendanceForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('Present'); // Default status
  const isValidDate = (input) => {
    const parts = input.split('/');
    if (parts.length !== 3) return false;
    
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) return false;
    if (month === 2) {
        if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
            if (day > 29) return false;
        } else if (day > 28) return false;
    }
    return true;
}


  const handleSubmit = () => {
    if (!isValidDate(date)) {
      alert("Please enter a valid date in the format dd/mm/yyyy");
      return;
  }
    onAdd({ name, regNo, date, subject, status }); // Include status in the data
    setName('');
    setRegNo('');
    setDate('');
    setSubject('');
    setStatus('Present'); // Reset status to default
  };

  return (
    <div className="form-container">
      <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required  />
      <input className="form-input" value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Roll No" required/>
      <input className="form-input" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date (dd/mm/yyyy)" pattern="\d{2}/\d{2}/\d{4}" required />
      <input className="form-input" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
      <div className="radio-container">
        <label className="radio-label">
          <input type="radio" value="Present" checked={status === 'Present'} onChange={() => setStatus('Present')} />
          Present
        </label>
        <label className="radio-label">
          <input type="radio" value="Absent" checked={status === 'Absent'} onChange={() => setStatus('Absent')} />
          Absent
        </label>
      </div>
      <button className="submit-button" onClick={handleSubmit}>UPDATE</button>
    </div>
  );
};


// AttendanceTable Component
const AttendanceTable = ({ data }) => (
  <table className="attendance-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Roll No</th>
        <th>Date</th>
        <th>Subject</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry, idx) => (
        <tr key={idx}>
          <td>{entry.name}</td>
          <td>{entry.regNo}</td>
          <td>{entry.date}</td>
          <td>{entry.subject}</td>
          <td>{entry.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Main App Component
function App() {
  const [attendanceData, setAttendanceData] = useState([]);

  const addData = (data) => {
    setAttendanceData([...attendanceData, data]);
  };

  return (
    <div className="App">
 <h2 className="heading">Attendance Form</h2>       
    <div className="app-container">
      <div className="form-container">
        <AttendanceForm onAdd={addData} />
      </div>
      <div className="table-container">
        <AttendanceTable data={attendanceData} />
      </div>
    </div>
  </div>
);
}
export default App;