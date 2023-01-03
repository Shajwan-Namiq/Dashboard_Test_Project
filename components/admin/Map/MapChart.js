import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

import ReactTooltip from "react-tooltip";



const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const markers = [
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: -15, name: "Iraq", coordinates: [33.2232, 43.6793] },
  { markerOffset: 25, name: "Iran", coordinates: [32.4279, 53.688] },
  { markerOffset: 25, name: "Russia", coordinates: [61.524, 105.3188] },
  { markerOffset: 25, name: "Afghanistan", coordinates: [33.9391, 33.9391] },
  { markerOffset: 25, name: "Taiwan", coordinates: [23.6978, 120.9605] },
  { markerOffset: -15, name: "China", coordinates: [35.8617, 104.1954] },
  { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  {
    markerOffset: 25,
    name: "United Kingdom",
    coordinates: [55.3781, 3.436],
  },
  { markerOffset: -15, name: "Germany", coordinates: [51.1657, 10.4515] },
  { markerOffset: -15, name: "Italy", coordinates: [41.8719, 12.5674] },
];

const MapChart = () => {
 
 
  return (
    <>
    

      <ComposableMap>
        
          {" "}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#14213d"
                  stroke="#D6D6DA"
                  style={{
                    hover: {
                      fill: "#fca311",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={5} fill="#bf0603" stroke="#e5e5e5" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#fca311" }}
              >
                {name}
              </text>
            </Marker>
          ))}
         
      </ComposableMap>
    </>
  );
};

export default MapChart;
