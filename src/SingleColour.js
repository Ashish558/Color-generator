
import React, { useState, useEffect } from 'react';

const SingleColour = ({ rgb, weight, index, hexColor }) => {
   const [alert, setAlert] = useState(false)
   const bcg = rgb.join(' , ')
   const hexValue = "#" + hexColor

   useEffect(() => {
      const timeout = setTimeout(() => {
         setAlert(false)
      }, 2000)
      return () => {
         clearTimeout(timeout)
      }
   }, [alert])

   return (
         <div onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(hexValue)
         }}
            className="single-color col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6"
            style={{ backgroundColor: "rgb(" + bcg + ")" }}>
            {/*<p>{weight}</p>*/}
            <p>{hexValue}</p>
            {alert && <p className="alert">Copied To Clipboard</p>}
         </div>
   )
}

export default SingleColour