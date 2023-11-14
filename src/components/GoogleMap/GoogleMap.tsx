/* eslint-disable no-undef */
'use client'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '244px',
  borderRadius: '8px',
};

const center = {
  lat: 24.843190944110965,
  lng: 46.7624756288348,
};

const zoom = 7;

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  });
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map: any) => {
    map.setZoom(zoom);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      center={center}
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={zoom}>
      <Marker
        position={center}
        title={'test'}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
