import Image from 'next/image'
import Permissions from '../styles/404.module.css'
import AstronautFly from '../images/Error-Search.png'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

export default function NotPermission(){
    useEffect(() => {
        if (navigator.permissions.query({ name: "geolocation" }).then((result) => {
            if (result.state === "granted") {
                location.replace('/')
            } else if (result.state === 'denied') {
              null
            }
        })) {
    
        }
    }, [])
    process.browser ? navigator.geolocation.getCurrentPosition((pos) => pos)
    :
    null
    return(
        <>
        <Button className='bg-info' id={Permissions.link}><Link className='text-decoration-none text-light' href="/"><h5>Home</h5></Link></Button>
        <h1 className={Permissions.title} >404 Error</h1>
        <h2 className={Permissions.subtitle}>Please turn on the geolocation permissions</h2>
        <Image width={200} className='mt-5' alt='astronaut' src={AstronautFly}></Image>
        <div className='text-center'>
        <Button className='bg-info' id={Permissions.link}><Link className='text-light' href="https://support.google.com/chrome/answer/142065?hl=pt-BR&co=GENIE.Platform%3DDesktop">How i turn on and allow geolocation?</Link></Button>
        <Button className='bg-info' id={Permissions.link}><Link className='text-light' href="https://jaimeneeves.medium.com/explorando-a-api-geolocation-em-javascript-um-guia-passo-a-passo-94d332c96f0d">How geolocation use this information?</Link></Button>
        </div>
        </>
    )
}