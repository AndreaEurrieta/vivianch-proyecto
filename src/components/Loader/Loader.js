import React from 'react';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="text-center containerLoader">
      <div className="spinner-border" role="status">
        <span className="loader"></span>
      </div>
    </div>
  )
}
