import React , {useContext, useRef,useState} from "react"

import {UserContext} from "../../context/userContext"

import Background from "../../assets/images/bg/bg_log.jpg"
import UserLogIcon from "../../assets/images/user-shape.svg"
import PasswordLogIcon from "../../assets/images/padlock.svg"
import LogLoader from '../loader/log_loader'
import Logo from "../../assets/images/logo.png"
import {auth, db} from '../../firebase-config'
import { useNavigate } from 'react-router'
import Cookies from "universal-cookie"


export default function Home(){

  return(
    <div className="home_container">
        <h1>Hello World</h1>
    </div>
  )
}
