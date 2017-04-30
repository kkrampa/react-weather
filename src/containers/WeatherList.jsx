import React from 'react';

import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';


class WeatherList extends React.Component {

    renderWeather(cityData, idx) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const { lon, lat } = cityData.city.coord;

        return (
          <tr key={name + idx}>
            <td><GoogleMap lon={lon} lat={lat} /></td>
            <td>
              <Chart data={temps} color="orange" />
            </td>
            <td>
              <Chart data={pressures} color="green" />
            </td>
            <td>
              <Chart data={humidities} color="black" />
            </td>
          </tr>
        );
    }

    render() {
        return (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (Celsius)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.weather.map(this.renderWeather)}
            </tbody>
          </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
