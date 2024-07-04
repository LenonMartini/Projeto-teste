import React from 'react';
import './style.css'; // Arquivo de estilos para o SpinnerComponent

const SpinnerComponent = ({ show }) => {
  return (
    <div className={`spinner-container ${show ? 'show' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default SpinnerComponent;
