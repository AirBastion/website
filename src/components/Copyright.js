import React from 'react';
import PropTypes from 'prop-types';

const Copyright = (props) => {
  return (
    <div className="copyright">Copyright © Air Bastion 2018  || <a alt="disclaimer" href={props.disclaimer}>Disclaimer</a></div>
  );
}

Copyright.propTypes = {
  disclaimer: PropTypes.string,
}

export default Copyright;
