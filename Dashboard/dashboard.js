import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Webcam from 'react-webcam';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); // 

    const [username, setUsername] = useState("");
  const [vehicleData, setVehicleData] = useState({
    truckId: '',
    driverName: '',
    tareWeight: '',
    grossWeight: '',
    loadType: '',
    loadTime: '',
    status: '',
    destination: ''
  });

  const [image, setImage] = useState(null);
  const [useWebcam, setUseWebcam] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [latestReport, setLatestReport] = useState(null);

  const webcamRef = React.useRef(null);
    useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleCapture = () => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (!screenshot) {
      alert('Failed to capture image. Please ensure your webcam is active.');
      return;
    }

    setScreenshot(screenshot);

    const byteString = atob(screenshot.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([ab], { type: 'image/jpeg' });
    const file = new File([blob], 'webcam.jpg', { type: 'image/jpeg' });
    setImage(file);
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    setScreenshot(null);
  };

  const handleDetect = async () => {
    if (!image) {
      alert('Please upload or capture an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    Object.entries(vehicleData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data && data.oreType) {
        setLatestReport(data);
        setVehicleData({
          truckId: '',
          driverName: '',
          tareWeight: '',
          grossWeight: '',
          loadType: '',
          loadTime: '',
          status: '',
          destination: ''
        });
        setImage(null);
        setScreenshot(null);

        alert('Prediction saved!');
      } else {
        alert('Prediction failed!');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong while submitting');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); localStorage.removeItem("username");
    sessionStorage.removeItem("authToken");

    navigate('/signup');
  };

  return (
    <div className="dashboard-container">
      <div className="top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Welcome, {username} 👋</h2>
        <button onClick={handleLogout} className="button logout-btn">
          Logout
        </button>
      </div>

      <section className="section">
        <h2>Vehicle Data</h2>
        <div className="grid">
          {Object.keys(vehicleData).map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              className="input"
              value={vehicleData[field]}
              onChange={handleChange}
              required
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Ore Image</h2>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" onChange={() => setUseWebcam(!useWebcam)} /> Use Webcam
          </label>
        </div>

        {useWebcam ? (
          <>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={400}
              className="webcam"
            />
            <button onClick={handleCapture} className="button">Capture</button>
            {screenshot && <img src={screenshot} alt="captured" className="screenshot" />}
          </>
        ) : (
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        )}

        <button onClick={handleDetect} className="button">
          Detect Ore Type & Save
        </button>
      </section>

      <section className="section">
        <h2>Recent Report</h2>
        {latestReport ? (
          <div className="report-entry">
            {Object.entries(latestReport).map(([key, value]) => (
              <p key={key}><strong>{key}:</strong> {value}</p>
            ))}
          </div>
        ) : (
          <p>No report yet</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
