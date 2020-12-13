import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaunchSelector from '../Components/LaunchSelector';
import LaunchDetail from '../Components/LaunchDetail';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: [],
        }
        this.findLaunchByYear = this.findLaunchByYear.bind(this);
    }

    componentDidMount() {
        const request = new Request()

        const promise1 = request.get('/api/launches');
        const promises = [promise1]

        Promise.all(promises).then((data) => {
            this.setState({
                launches: data[0]._embedded.launches
            })
        })
    }

    findLaunchByYear(year) {
        const launch = this.state.launches.find((launch) => {
            return launch.year === parseInt(year)
        })
        return launch;
    }

    render() {
        return (
            <div className="main-container-div">
                <Router>
                    <React.Fragment>
                        <Switch>

                            <Route exact path="/launches" render={(props) => {
                                return <LaunchList launches={this.state.launches} />
                            }} />

                            <Route exact path="/launches/year" render={(props) => {

                                const id = parseInt(props.match.params.id);
                                const launch = this.findLaunchByYear(year);
                                return <LaunchDetails launch={launch}/>
                            }} />

                        </Switch>
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default MainContainer;
