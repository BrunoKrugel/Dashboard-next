import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';

const api_key = process.env.NEXT_PUBLIC_GCLOUD_KEY;

const containerStyle = {
  width: '400px',
  height: '280px',
};

function MyMap({ center, onCitySelect }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: api_key,
  });

  const [map, setMap] = React.useState('');

  const onLoad = React.useCallback(function callback(loadMap) {
    setMap(loadMap);
  }, []);

  const onUnmount = React.useCallback(function callback(_mountMap) {
    setMap(null);
  }, []);

  const onClick = async (...args) => {
    console.log(
      'onClick args: ',
      args[0].latLng.lat(),
      ',',
      args[0].latLng.lng()
    );
      let localization = `${args[0].latLng.lat()}${args[0].latLng.lng()}`;
      //Forecast for the week
      await axios
        .post(`${window.location.origin}/api/country/currentCity`, {
          localization,
        })
        .then((resCity) => {
          console.log(resCity.data);
          localStorage.setItem('cityName', resCity.data.data[0].city);
          onCitySelect(resCity.data.data[0].city);
        })
        .catch((err) => {
          console.log(err);
        }
        );
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      clickableIcons={false}
      onClick={onClick}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
export { MyMap };
