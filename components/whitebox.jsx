import box from "../styles/box.module.css";
import GPS from "../images/gps-icon.png";
import Image from 'next/image'

export default function a(props) {
    const code = () => {
        if (process.browser) {
            var more = 0
            var down = 100

            const div = document.querySelectorAll("div")


            setTimeout(() => {

                const animationBoxGPS = setInterval(() => {
                    div[6].style.opacity = `${more++}%`
                    if (more == 100) {
                        clearInterval(animationBoxGPS)
                    }
                }, 10);

                setTimeout(() => {
                    let outAnimationGPS = undefined
                    window.innerWidth <= 615 ? outAnimationGPS = null : outAnimationGPS = setInterval(() => {
                        div[6].style.opacity = `${down--}%`
                        if (down == 0) {
                            clearInterval(outAnimationGPS)
                        }
                    }, 10);
                }, 9000);

                setTimeout(() => {
                    const animationBoxGPS = setInterval(() => {
                        div[6].style.opacity = `${down++}%`
                        div[6].style.marginRight = "auto"
                        div[6].style.position = "relative"
                        div[6].style.left = "0%"
                        if (down == 100) {
                            clearInterval(animationBoxGPS)
                        }
                    }, 10);
                }, 20000);
            }, 10000);
        }
    }
    code()


    return (

        <div className={box.boxGPS}>
            <Image src={GPS} className={box.gps} alt="gps" />
            <h1 className={box.h1GPS}>Search for Coords or IP </ h1>
            <h2 className={box.h2GPS}>Coordinates</h2>
            <p className={box.pGPS}>Coordinates A pair of numbers that describe the position of a point on a coordinate plane by using the horizontal and vertical distances from the two reference axes. Usually represented by (x,y) the x-value and y-value.</p>
            <h2 className={box.h2GPS}>IP Address</h2>
            <p className={box.pGPS}>An IP address is a unique address that identifies a device on the internet or a local network. IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network.</p>
        </div>

    )
}
