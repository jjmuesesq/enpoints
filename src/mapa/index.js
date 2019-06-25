import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Map';
import './styles.css';

const googleMapsApiKey = "AIzaSyCOJZ-oU1uV5KmoxNS9zWBr2emcUZWjXUc";

const App = props => {
  const {places} = props;

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;  

  return (   
    
    <div>        

        <label className="">Ruta Origen:</label>
        <br />
        <input name="coorX1"   />
        <input name="coorX2"   />
        <br /> 
        <br />
        <label className="">Ruta destino:</label>
        <br />
        <input name="coorY1" />
        <input name="coorY2" />
        <br />
        <br />

        <Map
            googleMapURL={
                'https://maps.googleapis.com/maps/api/js?key=' +
                googleMapsApiKey +
                '&libraries=geometry,drawing,places'
            }
            markers={places}
            loadingElement={loadingElement || <div style={{height: `100%`}}/>}
            containerElement={containerElement || <div style={{height: "80vh"}}/>}
            mapElement={mapElement || <div style={{height: `100%`, width:`50%`}}/>}
            defaultCenter={defaultCenter || {lat: 4.636375, lng: -74.081332}}
            defaultZoom={defaultZoom || 11}
        />   
   
    </div>
    
  );
};


const places = [
  {latitude: 4.636375,longitude: -74.081332},
  {latitude: 4.573515,longitude: -74.134474}
    
]

render(<App defaultZoom={7} places={places} />, document.getElementById('root'));
