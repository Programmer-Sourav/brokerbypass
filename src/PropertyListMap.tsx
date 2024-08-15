import "./property_list_map.css"

import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import { createRoot } from "react-dom/client";
import {AdvancedMarker, APIProvider, Map, MapCameraChangedEvent, Pin, useMap, useMapsLibrary} from "@vis.gl/react-google-maps"
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import type {Marker} from '@googlemaps/markerclusterer';



type Poi ={ key: string, location: google.maps.LatLngLiteral }

const locations: Poi[] = [
  {key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108  }},
  {key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 }},
  {key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 }},
  {key: 'hyderPark', location: { lat: -33.8690081, lng: 151.2052393 }},
  {key: 'theRocks', location: { lat: -33.8587568, lng: 151.2058246 }},
  {key: 'circularQuay', location: { lat: -33.858761, lng: 151.2055688 }},
  {key: 'harbourBridge', location: { lat: -33.852228, lng: 151.2038374 }},
  {key: 'kingsCross', location: { lat: -33.8737375, lng: 151.222569 }},
  {key: 'botanicGardens', location: { lat: -33.864167, lng: 151.216387 }},
  {key: 'museumOfSydney', location: { lat: -33.8636005, lng: 151.2092542 }},
  {key: 'maritimeMuseum', location: { lat: -33.869395, lng: 151.198648 }},
  {key: 'kingStreetWharf', location: { lat: -33.8665445, lng: 151.1989808 }},
  {key: 'aquarium', location: { lat: -33.869627, lng: 151.202146 }},
  {key: 'darlingHarbour', location: { lat: -33.87488, lng: 151.1987113 }},
  {key: 'barangaroo', location: { lat: - 33.8605523, lng: 151.1972205 }},
];

const latLngsOfLocations = locations.map(location => location.location);


const PoiMarkers = (props: { pois: Poi[] }) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({map});
    }
    //polygon area for markers clusters
    var polygonArea = new google.maps.Polygon({
      paths: latLngsOfLocations,
      strokeColor: 'red',
      strokeOpacity: 0.2,
      strokeWeight: 3,
      fillColor: "#D9B7B0",
      fillOpacity: 0.35
    })
    polygonArea.setMap(map);

  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return {...prev, [key]: marker};
      } else {
        const newMarkers = {...prev};
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };
  const handleClick = useCallback((ev: google.maps.MapMouseEvent) => {
    if(!map) return;
    if(!ev.latLng) return;
    console.log('marker clicked:', ev.latLng.toString());
    map.panTo(ev.latLng);
  }, [map]);

 
    // const geoCodingLibrary = useMapsLibrary("geocoding")

  
    // const geoCoder = useMemo(()=>geoCodingLibrary && new geoCodingLibrary.Geocoder(), [geoCodingLibrary])

    // useEffect(() => {
    //   if (!geoCoder) return;
  
    //   // now you can use `geocoder.geocode(...)` here
    //   const geocode = geoCoder.geocode("BTM Layout");
    // }, [geoCoder]);

  return (
    <>
      {props.pois.map( (poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={marker => setMarkerRef(marker, poi.key)}
          clickable={true}
          onClick={handleClick}
          >
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
      
    </>
  );
};


const PropertyListMap = () => (
<div id='map-container'>  
<APIProvider apiKey = {"AIzaSyDRQY74G3jt2GJFVAhsWNwjQfQ8E8HEZ78"} onLoad= {()=>{console.log("Maps JS API has been loaded")}}>
<Map
  defaultZoom = {13}
  defaultCenter = {{ lat: -33.860664, lng: 151.208138 }}
  mapId="7dc332444714422b"
  onCameraChanged = {( event: MapCameraChangedEvent)=>{
    console.log("Camera Changed Pos ", event.detail.center, event.detail.zoom);
  }}>
    <PoiMarkers pois={locations}/>
  </Map>
</APIProvider>
</div>
);


export default PropertyListMap;