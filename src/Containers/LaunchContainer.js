import React from 'react';
import LaunchSelector from '../Components/LaunchSelector';
import LaunchDetail from '../Components/LaunchDetail';

class LaunchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      currentLaunch: null
    };
    this.handleLaunchSelected = this.handleLaunchSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://api.spacexdata.com/v3/launches';

    fetch(url)
      .then(res => res.json())
      .then(launches => this.setState({ launches: launches }))
      .catch(err => console.error);
  }

  handleLaunchSelected(index) {
    const selectedLaunch = this.state.launches[index];
    this.setState({ currentLaunch: selectedLaunch })
  }

  render() {
    return (
      <div>
        <h2>Launch Container</h2>
        <LaunchSelector launches={this.state.launches} onLaunchSelected={this.handleLaunchSelected} />
        <LaunchDetail launch={this.state.currentLaunch} />
      </div>
    );
  }
}

export default LaunchContainer;
