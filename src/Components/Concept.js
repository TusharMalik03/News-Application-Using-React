import React from 'react'
import { useEffect } from 'react'

export default function Concept(props) {

  useEffect(()=>{
    console.log("use Effect  is working now")
  },[])


    return (
    <>
        {console.log("render is working now")} 
    </>
  )
}
