import React from 'react';
import config from '../../../../config';
import './styles.css';

const buttonClicked = () => {
  if (window.Intercom) {
    window.Intercom('boot', {
      app_id: 'ioae21aq',
      hide_default_launcher: true
    });
    window.Intercom('show');
  }
};

const IntercomButton = ({ children, className = 'intercom-button' }) => {
  return (
    <button type="button" className={className} onClick={buttonClicked}>
      {children}
    </button>
  );
};

export default IntercomButton;
