import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Reports = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await api.get('/reports/generate');
        setReport(response.data);
      } catch (error) {
        alert('Failed to fetch reports');
      }
    };
    fetchReport();
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      {report ? (
        <pre>{JSON.stringify(report, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Reports;
