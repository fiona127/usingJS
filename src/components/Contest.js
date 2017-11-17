//handle events

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
    render() {
        return (
            <div className="Contest">
                <div className="contest-descr">
                    {this.props.descr}
                </div>
                <div className="home-link link" onClick={this.props.contestListClick}>
                    Contest List
                </div>
            </div>
        );
    }
}

Contest.PropTypes= {
    descr: PropTypes.string.isRequired,
    contestListClick: PropTypes.func.isRequired
};

export default Contest;