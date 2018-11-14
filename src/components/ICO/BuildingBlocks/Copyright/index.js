import React from 'react';
import PropTypes from 'prop-types';

const Copyright = (props) => {
  return (
    <React.Fragment>
      <p style={{textAlign: 'center'}}>Copyright © Air Bastion 2018  || <a alt="disclaimer" href={props.disclaimer} style={{color: 'white'}}>Disclaimer</a></p>

    </React.Fragment>
  );
}

Copyright.propTypes = {
  disclaimer: PropTypes.string,
}

export default Copyright;
