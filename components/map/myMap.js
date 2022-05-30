import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const api_key = process.env.NEXT_PUBLIC_GCLOUD_KEY;

const containerStyle = {
  width: '400px',
  height: '280px',
};

function MyMap({ center }) {
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

  const onClick = (...args) => {
    console.log(
      args[0],
      'onClick args: ',
      args[0].latLng.lat(),
      ' : ',
      args[0].latLng.lng()
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
