import React from 'react';

const LaunchSelector = (props) => {
  const options = props.launches.map((launch, index) => {
    return <option value={index} key={index}>{launch.name}</option>
  })

  function handleChange(event) {
    props.onLaunchSelected(event.target.value);
  }

  return (
    <select id="launch-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a launch...</option>
      { options }
    </select>
  )
}

export default LaunchSelector;
