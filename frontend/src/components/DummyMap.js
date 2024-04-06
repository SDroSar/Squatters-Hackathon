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
  { lat: 50.0411867, lng: 21.9990196, title: 'Rzeszow', address: 'Al. Józefa Piłsudskiego 34 35-001 Rzeszów Poland',  telephone: '+48 17 875 47 00',
  resources: {
    foodPacks: 100,
    beds: 100,
    powerPacks: 100
  } },
  { lat: 51.2464536, lng: 22.5684463, title: 'Lublin',  address: 'ul. Krakowskie Przedmieście 54 20-002 Lublin Poland',
  telephone: '+48 81 448 08 00',
  resources: {
    foodPacks: 100,
    beds: 100,
    powerPacks: 100
  } },
  { lat: 50.7226256, lng: 23.2514861, title: 'Zamosc',address: 'ul. Gminna 9 22-400 Zamość Poland',
  telephone: '+48 84 530 09 10',
  resources: {
    foodPacks: 100,
    beds: 100,
    powerPacks: 100
  } },
  // { lat: 50.0619474, lng: 19.9368564, title: 'Krakow', address: 'ul. Świętokrzyska 12 31-015 Kraków Poland',
  // telephone: '+48 12 428 64 00',
  // resources: {
  //   foodPacks: 100,
  //   beds: 100,
  //   powerPacks: 100
  // } }
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
            <p>{selectedLocation.address}</p>
            <p>{selectedLocation.telephone}</p>
            <p>Food Packs: {selectedLocation.resources.foodPacks}</p>
            <p>Beds: {selectedLocation.resources.beds}</p>
            <p>Power Packs: {selectedLocation.resources.powerPacks}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);