import { createContext, useState, useEffect } from "react"
import { collection, getDocs , doc, getDoc, setDoc, updateDoc} from 'firebase/firestore/lite';

import {auth, db} from '../firebase-config'


export const EanContext = createContext()

export function EanContextProvider(props){
  const [ean, setEan] = useState()
  const [eanState, setEanState] = useState(false)
  const getEan = async(id) => {
    try {
      const ean = doc(db, 'ean', id)
      const teamSnapshot = await getDoc(ean)
      const teamList = teamSnapshot.data()
      return teamList
    } catch (e) {
      return 'error context'
    }
  }
  return(
    <EanContext.Provider value={{getEan, ean, setEan, eanState, setEanState}}>
      {props.children}
    </EanContext.Provider>
  )
}
