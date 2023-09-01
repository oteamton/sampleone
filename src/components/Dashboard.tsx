import React, { useState } from 'react';
import './styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [boxes, setBoxes] = useState([{ id: 1 }]);

  const handleAddDeviceClick = () => {
    const newBoxId = boxes.length + 1;
    setBoxes([...boxes, { id: newBoxId }]);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Dashboard!</h1>
      <div className="dashboard-section">
        {boxes.map((box) => (
          <div key={box.id} className="dashboard-box">
            <h2>Box {box.id}</h2>
            {/* Modify content in box */}
          </div>
        ))}
        <button className="add-device-button" onClick={handleAddDeviceClick}>
          Add Device
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
