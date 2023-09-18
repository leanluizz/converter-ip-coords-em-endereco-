import React from "react";
import box from "../styles/box.module.css"
import WhiteBox from "../components/whitebox.jsx"
import BlueBox from "../components/bluebox.jsx"

export default function (props) {
    return (
        <React.Fragment>
            <div className={box.flex}>
                <WhiteBox />
                <BlueBox />
            </div>
        </React.Fragment>
    )
}