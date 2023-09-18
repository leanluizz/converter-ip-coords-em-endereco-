import React, { useContext, useEffect, useState } from "react";
import router from "../styles/router.module.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Context } from "./context_component/context.jsx"

export default function (props) {
  const { Latitude, Longitude } = useContext(Context)

  const styled = {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    "z-index": "3",
    "margin-bottom": "20%"
  }

  return (
    <div className={router.box}>
      <MapContainer center={{ 
        lat: Latitude, 
        lng: Longitude
        }} zoom={13} scrollWheelZoom={false} style={styled}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{ lat: Latitude, lng: Longitude }} >
        </Marker>
      </MapContainer>

    </div>

  )
}