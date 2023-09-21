import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Styles from '../styles/Home.module.css';
import Search from "../components/search.jsx";
import Flex from "../components/flex.jsx";
import Rocket from "../images/rocket.gif";

export default function Home() {

if(process.browser){
  if (navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
        null
    } else if (result.state === 'denied') {
      location.replace('/404')
    }
})) {
}
}

  const code = () => {

    if (process.browser) {
      const Rocket = document.querySelector(".Rocket")
      let div = document.querySelectorAll("div")
      useEffect(() => {
        setTimeout(() => {
          if (Rocket) {
            Rocket.remove()
          } else {
            false
          }
          window.innerWidth <= 815 ? div[8].style.opacity = "100%" : null
        }, 10000);
      }, [])
    }
  }
  code()
  return (
    <div className={Styles.body}>
      <Head>
        <title>X-Localyza</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
      </Head>
      <Search />
      <Image src={Rocket} className="Rocket" alt='Rocket' />
      <Flex />
    </div>
  )
}