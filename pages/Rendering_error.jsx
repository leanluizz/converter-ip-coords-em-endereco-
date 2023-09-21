import Image from 'next/image'
import SuperAstronaut from '../images/super-astronaut.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

export default () => {
    const [Seconds, setSeconds] = useState(15);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
               if (prevSeconds == 0) {
                clearInterval(interval)
                location.replace('/')
                return null
               }else{ return prevSeconds - 1 }
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
        <h1 className='text-light text-center'>An error occurred when rendering please wait while we fix the error...</h1>
        <h2 className='text-light text-center'>You will be reloaded to the home page in</h2>
        <h2 className='text-light text-center'>{Seconds}</h2>
        <Image className='superastronaut' src={SuperAstronaut} alt='astronaut'/>
        <h3 className='text-light text-center'>Maybe we need reload one more of sometimes...</h3>
        </>
    )
}
