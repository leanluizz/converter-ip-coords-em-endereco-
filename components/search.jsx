import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Search from "../styles/search.module.css"
import Astronaut from "../images/astronaut.gif"
import Image from "next/image"
import Error from "./Error.jsx"
import { Context } from "../components/context_component/context.jsx"

// Importe o MapContainer dinamicamente usando a função dynamic
const MapContainer = dynamic(() => import("react-leaflet").then((module) => module.MapContainer), {
  ssr: false, // Isso garante que a renderização ocorra apenas no lado do cliente
});
const TileLayer = dynamic(() => import("react-leaflet").then((module) => module.TileLayer), {
    ssr: false, // Isso garante que a renderização ocorra apenas no lado do cliente
  });
  const Marker = dynamic(() => import("react-leaflet").then((module) => module.Marker), {
    ssr: false, // Isso garante que a renderização ocorra apenas no lado do cliente
  });

export default function a(props) {
    let Keys = []
    let Values = []
    const [Latitude, setLatitude] = useState()
    const [Longitude, setLongitude] = useState()
    const [data, setdata] = useState({})
    const [Modal, setModal] = useState()

    useEffect(() => {
        const geoLoc = (pos) => {
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`)
                .then(response => response.json())
                .then(response => setdata(response.address))
            setLatitude(pos.coords.latitude ||"-20.661766351424113")
            setLongitude(pos.coords.longitude || "-43.76629044511121")
        }
        navigator.geolocation.getCurrentPosition(geoLoc)
    }, [])


    Keys.push(Object.keys(data))
    Values.push(Object.values(data))
    const values = Values[0]

    const Searching = (e) => {
        e.preventDefault()
        let input = document.querySelector("input")

        const handleInput = (isIP, isCoords) => {
            let patternCoords = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/ //Coords regexp
            let patternIP = /^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$|^$/ //IP regexp
            isIP = patternIP.test(input.value)
            isCoords = patternCoords.test(input.value)
            input.value.length == 0 ? isIP = false && isCoords == false : isIP, isCoords
            return [isIP, isCoords]
        }
        if (handleInput(input.value, input.value)[0]) { //IP
            fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_KfNPBvuqSsht7BkLGwuXgErTUfVDS&ipAddress=${input.value}`)
                .then(response => response.status === 200 ? input.style.animation = "Sucess 0.2s alternate" : "NoSucess 0.2s alternate")
            input.style.animation = ""

            fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_KfNPBvuqSsht7BkLGwuXgErTUfVDS&ipAddress=${input.value}`)
                .then(response => response.json())
                .then(response => setdata(response.location))

            Keys.push(Object.keys(data))
            Values.push(Object.values(data))

        } else if (handleInput(input.value, input.value)[1]) { //Coords
            const x = input.value.indexOf(",")
            const Lat = input.value.slice(0, x)
            const Long = input.value.substring(x + 2)

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${Lat}&lon=${Long}&format=json`)
                .then(response => response.status === 200 ? input.style.animation = "Sucess 0.2s alternate" : "NoSucess 0.2s alternate")
            input.style.animation = ""

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${Lat}&lon=${Long}&format=json`)
                .then(response => response.json())
                .then(response => setdata(response.address))
            setLatitude(Lat)
            setLongitude(Long)
            Values.push(Object.values(data))

        } else {
            let erro = undefined
            input.value.length >= 40 ? erro = `"Max lenght ultrapassed"` : erro = `"${input.value}"`
            setModal(<Error
                error={erro}
                IPError="IP: 000.000.0.0"
                CoordsError="Coords: -00.000000000, -00.000000000"
            />)
        }

    }
    return (
        <Context.Provider value={
            {
                Latitude, setLatitude,
                Longitude, setLongitude,
                Modal, setModal,

            }}>
            <div className={Search.box} id="box">
                {Modal}
                <div className={Search.Earth}>
                    <Image src={Astronaut} className={Search.gif} alt="Astronaut" />
                    <div className={Search.list}>
                        <ul>
                            {Keys[0].map((e, i) => <li type="none" className={Search.list} key={e}>{e} : {values[i]} </li>)}
                        </ul>
                    </div>
                </div>
                <form className={Search.content_blue} action="./api/query" id="Search" onSubmit={Searching}>
                    <input type="text" className={Search.input} name="query" placeholder="Example: -20.61552081859054, -43.81838967145381  - Latitude/Longitude" />
                    <button className={Search.button}>Go!</button>
                </form>
                <details className="bg-primary">
              <summary>Map</summary>
                <div className={router.box}>
        <MapContainer
          center={{
            lat: Latitude,
            lng: Longitude,
          }}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            overflow: "hidden",
            height: "100%",
            width: "100%",
            zIndex: "3",
            marginBottom: "20%",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={{
              lat: Latitude,
              lng: Longitude,
            }}
          ></Marker>
        </MapContainer>
  </div>
                </details>
            </div>
        </Context.Provider>
    )
}
