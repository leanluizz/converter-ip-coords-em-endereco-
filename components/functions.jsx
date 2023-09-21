import React, { useContext, useEffect, useState } from "react";
import router from "../styles/router.module.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Context } from "./context_component/context.jsx";

export default function (props) {
  let { Latitude, Longitude } = useContext(Context);
  const [Map, setMap] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const styled = {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    zIndex: "3",
    marginBottom: "20%",
  };


  useEffect(() => {
    const checkGeolocationPermission = async () => {
      try {
        const result = await navigator.permissions.query({
          name: "geolocation",
        });

        if (result.state === "granted") {
          setMap(
            <MapContainer
              center={{
                lat: Latitude ,
                lng: Longitude
              }}
              zoom={13}
              scrollWheelZoom={false}
              style={styled}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={{ lat: Latitude ? "-27.929368233392843" : (Latitude, console.log("s")), lng: Longitude ? "-136.17649792979788": Longitude }}></Marker>
            </MapContainer>
          );
        } else if (result.state === "denied") {
          setPermissionDenied(true);
        }
      } catch (error) {
        console.error("Error checking geolocation permission:", error);
      }
    };

    checkGeolocationPermission();
  }, []); // Dependências vazias para executar apenas uma vez na montagem

  return (
    <div className={router.box}>
      {permissionDenied ? (
        <p>Permission to access geolocation denied.</p>
      ) : Map ? (
        Map
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}
