import React from 'react';
import './styles.css';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
