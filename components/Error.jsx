import React, { useContext } from "react";
import Image from "next/image"
import AstronautaError from "../images/Error-Search.png"
import CSS from "../styles/error.module.css"
import { Context } from "./context_component/context.jsx"

export default function a(props) {
  const { Modal, setModal } = useContext(Context)
  const ModalOn = () => setModal()

  process.browser ? document.body.addEventListener('click', () => !Modal) : null
  
  return (
    <div className={CSS.Overflow} onClick={ModalOn}>
      <div className={CSS.boxError}>
        <Image src={AstronautaError} alt="ErrorSearching" />
        <ul type="none">
          <li>{props.error} <p>Não é uma pesquisa válida, tente usar estes modelos</p></li>
          <li>{props.IPError}</li>
          <li>{props.CoordsError}</li>
        </ul>
      </div>
    </div>
  )
}
