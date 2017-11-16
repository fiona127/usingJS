import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from './Header';
//import data from '../testData';
import ContestPreview from './ContestPreview';


class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    componentDidMount() {

    }
    componentWillUnmount() {
        //clean timers, listeners
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;