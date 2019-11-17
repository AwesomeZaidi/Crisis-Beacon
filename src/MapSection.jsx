import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const MapSection = (props) => {
    const {
        data
    } = props;

    console.log('data;',data)
    return (
        <Map
            google={props.google}
            zoom={14}
        >
            {
                [1,2,3].map((index) => {
                    console.log('index')
                })
            }
            {
                data.items.map((index) => {
                    console.log('index')
                })
            }
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDyPU_ynD1XAFWcSSD44NEh3NFyqt8ketg'
})(MapSection);
