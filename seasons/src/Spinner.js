import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">Please allow location access...</div>
    </div>
  );
};

export default Spinner;
