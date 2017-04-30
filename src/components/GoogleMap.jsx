import React from 'react';

export default class GoogleMap extends React.Component {

    constructor(props) {
        super(props);
        this.map = null;
    }

    componentDidMount() {
        new google.maps.Map(this.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon,
            },
        });
    }

    render() {
        return <div ref={(el) => { this.map = el; }} />;
    }
}
