import React, { useState } from 'react';

const AttendanceForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = () => {
    onAdd({ name, regNo, date, subject });
    setName('');
    setRegNo('');
    setDate('');
    setSubject('');
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Registration No" />
      <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AttendanceForm;
