import React from 'react';
import PropTypes from 'prop-types';

const Copyright = (props) => {
  return (
    <React.Fragment>Copyright © Air Bastion 2018  || <a alt="disclaimer" href={props.disclaimer}>Disclaimer</a></React.Fragment>
  );
}

Copyright.propTypes = {
  disclaimer: PropTypes.string,
}

export default Copyright;
