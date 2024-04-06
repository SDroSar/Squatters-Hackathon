import React from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "700px",
  height: "700px",
  borderRadius: "20px",
};

const center = {
  lat: 50.6402778,
  lng: 22.2444444,
};

const locations = [
  { lat: 50.0411867, lng: 21.9990196, title: 'Rzeszow', description: 'This is Rzeszow' },
  { lat: 51.2464536, lng: 22.5684463, title: 'Lublin', description: 'This is Lublin' },
  { lat: 50.7226256, lng: 23.2514861, title: 'Zamosc', description: 'This is Zamosc' },
  { lat: 50.0619474, lng: 19.9368564, title: 'Krakow', description: 'This is Krakow' }
];

function MyComponent() {
  const google_maps_api = process.env.REACT_APP_google_maps_api;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: google_maps_api,
  });

  const [map, setMap] = React.useState(null);
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach(location => bounds.extend(location));
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={() => {
            setSelectedLocation(location);
          }}
        />
      ))}

      {selectedLocation && (
        <InfoWindow
          position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          onCloseClick={() => {
            setSelectedLocation(null);
          }}
        >
          <div>
            <h3>{selectedLocation.title}</h3>
            <p>{selectedLocation.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);