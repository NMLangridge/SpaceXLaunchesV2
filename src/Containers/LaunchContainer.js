import React from 'react';
import LaunchSelector from '../Components/LaunchSelector';
import LaunchDetail from '../Components/LaunchDetail';

class LaunchContainer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launches')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });

  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

      return (
        <div className="Launches">
          <ul>
            {items.map(item => (
              <li key={item.launches}>
                Flight ID: {item.flight_number}<br></br>
                Mission Name: {item.mission_name}<br></br>
                Launch Year: {item.launch_year}<br></br>
              </li>
            ))}
          </ul>
        </div>
      );

    }

    }
}

export default LaunchContainer;
