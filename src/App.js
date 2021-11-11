import React, { useState } from 'react';
import Values from "values.js"
import SingleColour from "./SingleColour"
import ColorRange from './ColorRange'

const App = () => {
   const [color, setColor] = useState('')
   const [list, setList] = useState([])
   const [error, setError] = useState(false)

   const handleSubmit = (e) => {
      e.preventDefault()
      try {
         let colors = new Values(color).all(10)
         setList(colors)
         setError("")
      } catch (err) {
         setError(err.message)
      }
   }

   return (
      <main className=' main'>
         <header>
            <h1 className='title'>Color Generator</h1>

            <div className='content'>
               <h4> Get tints and shades of a color</h4>
               <p>Type in a color's hexcode or rgba value <br/> to get 20 different shades of a color</p>
               <ColorRange />
            </div>

            <form className='search-form' onSubmit={handleSubmit}>
               <input type="text"
                  value={color}
                  placeholder='#edab65 or rgba(34, 45, 67)'
                  className={"$(error ? 'error' : null)"}
                  onChange={(e) => setColor(e.target.value)} />
               <button className='btn'> <div className='btn-text'>Generate</div> </button>
            </form>
         </header>

         <section className="colors row container">
            {(error) ? (
               <p> {error} </p>
            ) : (

               list.map((color, index) => {
                  return <SingleColour key={index} {...color} index={index}
                     hexColor={color.hex} />
               })

            )}
         </section>
      </main>

   )
}

export default App
