import React from 'react';

const EmptyPlaceholder = ({ message = 'No data available.' }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
      <p>{message}</p>
    </div>
  );
};

export default EmptyPlaceholder;
