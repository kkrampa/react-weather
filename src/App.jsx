import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import { createStore, applyMiddleware } from 'redux';

import './style/style.scss';

import rootReducer from './reducers';

import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <Provider store={storeWithMiddleware(rootReducer)}>
            <div>
              <SearchBar />
              <WeatherList />
            </div>
          </Provider>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
