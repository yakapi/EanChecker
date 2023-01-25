import React , {useContext, useRef,useState,useEffect} from "react"
import {
  useParams
} from "react-router-dom";
import {EanContext} from "../../context/eanContext"

import Background from "../../assets/images/bg/bg_log.jpg"
import UserLogIcon from "../../assets/images/user-shape.svg"
import PasswordLogIcon from "../../assets/images/padlock.svg"
import LogLoader from '../loader/log_loader'
import Logo from "../../assets/images/logo.png"
import {auth, db} from '../../firebase-config'
import { useNavigate } from 'react-router'
import Cookies from "universal-cookie"


export default function Ean(){
  let {id} = useParams()
  console.log('hello');
const {getEan, ean, setEan, eanState, setEanState} = useContext(EanContext)
const testy = async () =>{
  try {
    let arf = await getEan(id)
    setEanState(true)
    setEan(arf)

  } catch (e) {
    alert('error')
  }
}
useEffect(()=>{
  testy()
},[]
)
  if (eanState) {
    return(
      <div className="ean_container">
      <h1>{ean.name}</h1>
      <p>{ean.price} Euro</p>
      <p>{ean.ean}</p>
      </div>
    )
  }else {
    return(
      <div className="ean_container">
      <h1>Chargement</h1>
      </div>
    )
  }
}
