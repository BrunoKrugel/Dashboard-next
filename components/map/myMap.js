import React, { useEffect, useRef, ReactElement } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const api_key = process.env.NEXT_PUBLIC_GCLOUD_KEY;

const containerStyle = {
  width: '400px',
  height: '400px',
};


function MyMap({
  center
}) {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: api_key,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
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
      zoom={1}
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
