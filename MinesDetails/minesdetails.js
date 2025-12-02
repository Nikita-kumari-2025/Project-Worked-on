import React, { useEffect, useState } from 'react';
import './minesdetails.css';

const Minesdetails = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [filterTruckId, setFilterTruckId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/report')
      .then((res) => res.json())
      .then((data) => {
        setReports(data);
        setFilteredReports(data);
      })
      .catch((err) => console.error('Failed to fetch reports:', err));
  }, []);

  const handleFilter = () => {
    const filtered = reports.filter((report) => {
      const timestamp = new Date(report.timestamp);
      const matchesTruckId =
        filterTruckId === '' || report.truckId.toLowerCase().includes(filterTruckId.toLowerCase());
      const matchesStart = startDate === '' || timestamp >= new Date(startDate);
      const matchesEnd = endDate === '' || timestamp <= new Date(endDate);
      return matchesTruckId && matchesStart && matchesEnd;
    });
    setFilteredReports(filtered);
  };

  const resetFilter = () => {
    setFilterTruckId('');
    setStartDate('');
    setEndDate('');
    setFilteredReports(reports);
  };

  return (
    <div className="mines-container">
      <h2>Mine Dispatch Reports</h2>

      <div className="filter-controls">
        <p>Truck-Detail:-
        <input
          type="text"
          placeholder="Truck ID"
          value={filterTruckId}
          onChange={(e) => setFilterTruckId(e.target.value)}
        /></p>
        <p>Start-Date:-
        <input
          type="date"
          placeholder="Start-Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        /></p><p>End-Date:- 
        <input
          type="date"
          placeholder="End-Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        /></p>
        <button
  onClick={handleFilter}
  style={{
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#0e48a5",
    marginRight: "10px",
    transition: "background-color 0.3s ease"
  }}
>
  Apply Filter
</button>

<button
  onClick={resetFilter}
  style={{
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#888",
    transition: "background-color 0.3s ease"
  }}
>
  Reset
</button>

      </div>

      <table className="mines-table">
        <thead>
          <tr>
            <th>Truck ID</th>
            <th>Driver Name</th>
            <th>Tare Weight</th>
            <th>Gross Weight</th>
            <th>Load Type</th>
            <th>Status</th>
            <th>Destination</th>
            <th>Ore Type</th>
            <th>Load Time</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report, index) => (
            <tr key={index}>
              <td>{report.truckId}</td>
              <td>{report.driverName}</td>
              <td>{report.tareWeight}</td>
              <td>{report.grossWeight}</td>
              <td>{report.loadType}</td>
              <td>{report.status}</td>
              <td>{report.destination}</td>
              <td>{report.oreType}</td>
              <td>{report.loadTime}</td>
              <td>{new Date(report.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Minesdetails;


