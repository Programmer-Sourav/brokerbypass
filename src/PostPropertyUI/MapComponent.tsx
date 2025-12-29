import "../map-component.css"


import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import { createRoot } from "react-dom/client";
import {AdvancedMarker, APIProvider, Map, MapCameraChangedEvent, Marker, Pin, useMap, useMapsLibrary} from "@vis.gl/react-google-maps"
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { position } from "@chakra-ui/react";


export default function MapsComponent(){
 
  type Location = {
    lat: number;
    lng: number;
  };

  type LatLngLiteral  = {
    lat: number;
    lng: number;
  }
  
  const [currentLocation, setCurrentLocation] = useState<LatLngLiteral | undefined>();

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition)=>{
            const currentPosition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            console.log(1111, currentPosition)
            setCurrentLocation(currentPosition);
      })
    }
  }, [])

return(
<div id='map-container'> 
<APIProvider apiKey = {"AIzaSyDRQY74G3jt2GJFVAhsWNwjQfQ8E8HEZ78"} onLoad= {()=>{console.log("Maps JS API has been loaded")}}>
<Map
  defaultZoom = {16}
  defaultCenter = {currentLocation}
  mapId="7dc332444714422b"
  onCameraChanged = {( event: MapCameraChangedEvent)=>{
    console.log("Camera Changed Pos ", event.detail.center, event.detail.zoom);
  }}>
    <Marker position={currentLocation}/>
 </Map>
</APIProvider>
</div>  
    )
}