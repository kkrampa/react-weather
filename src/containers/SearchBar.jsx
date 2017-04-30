import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({
          term: '',
        });
    }

    render() {
        return (
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              onChange={event => this.setState({ term: event.target.value })}
              className="form-control"
              placeholder="Get a five-day forecast in your favorite cities"
              value={this.state.term}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default">Submit</button>
            </span>
          </form>
        );
    }
}

function mapDistpachToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDistpachToProps)(SearchBar);