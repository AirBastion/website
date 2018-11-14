import React from "react";
import PropTypes from "prop-types";

const Message = props => {
  return (
    <div className="columns">
      <div className="column">
        <p>{props.data}</p>
      </div>
      <div className="columns" />
    </div>
  );
};

export default Message;
