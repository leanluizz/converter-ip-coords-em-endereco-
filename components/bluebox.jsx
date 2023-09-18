import box from "../styles/box.module.css";
import Man from "../images/3dMan.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function () {

    if (process.browser) {
        var [more, setmore] = useState(0);

        const div = document.querySelectorAll("div");

        useEffect(() => {
            setTimeout(() => {
                const animationBoxPerson = setInterval(() => {
                    setmore(more++)

                    div[7].style.opacity = `${more}%`
                    if (more == 100) {
                        setmore(100)
                        clearInterval(animationBoxPerson)
                    }
                }, 10)
            }, 20000)
        }, [])
    }

    return (
        <div className={box.boxPerson}>
            <Image src={Man} className={box.gps} id={box.man} alt="man" />
            <h1 className={box.h1Person}>How work the app?</ h1>
            <h2 className={box.h2Person}>Looking for Coordinates</h2>
            <p className={box.pPerson}>Coordinates are used to identify a latitude and longitude of a location, Google Maps is a good app for look coords in input put for coords X and Y example: -20.658304934947353, -43.77374123179782  </p>
            <h2 className={box.h2Person}>Looking for IP Address</h2>
            <p className={box.pPerson}>An IP address is a unique address that identifies a device on the internet or a local network. IP stands for "Internet Protocol," knowing it go to "meuip.com.br" put that IP and see the magic</p>
        </div>
    )
}