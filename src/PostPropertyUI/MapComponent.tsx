import "../map-component.css"


import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import { createRoot } from "react-dom/client";
import {AdvancedMarker, APIProvider, Map, MapCameraChangedEvent, Pin, useMap, useMapsLibrary} from "@vis.gl/react-google-maps"
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import { ApiProvider } from '@reduxjs/toolkit/query/react';


export default function MapsComponent(){


return(
<div id='map-container'> 
<APIProvider apiKey = {"AIzaSyDRQY74G3jt2GJFVAhsWNwjQfQ8E8HEZ78"} onLoad= {()=>{console.log("Maps JS API has been loaded")}}>
<Map
  defaultZoom = {13}
  defaultCenter = {{ lat: -33.860664, lng: 151.208138 }}
  mapId="7dc332444714422b"
  onCameraChanged = {( event: MapCameraChangedEvent)=>{
    console.log("Camera Changed Pos ", event.detail.center, event.detail.zoom);
  }}>
 </Map>
</APIProvider>
</div>  
    )
}