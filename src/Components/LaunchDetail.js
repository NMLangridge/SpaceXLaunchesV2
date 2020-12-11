import React from 'react';

const LaunchDetail = (props) => {
  if (!props.launch) return null;
  return (
    <h3>{props.launch.name}</h3>
  );
}

export default LaunchDetail;
