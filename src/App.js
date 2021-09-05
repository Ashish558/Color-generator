
import React, { useState } from 'react';
import Values from "values.js"
import SingleColour from "./SingleColour"

const App=()=>{
  const [color,setColor] = useState('')
  const [list,setList] = useState([])
  const [error,setError] = useState(false)

const handleSubmit =(e)=>{
   e.preventDefault()
   try{
        let colors= new Values(color).all(10)
        setList(colors)
        setError("")
   }catch(err){
        setError(err.message)
   }
}
        
return(
<main>
     <header>
           <h3>Color Generator</h3>
           <form onSubmit={handleSubmit}>
                <input type="text" 
                             value={color}
                             className={"$(error ? 'error' : null)"} 
                             onChange={(e)=>setColor(e.target.value)}  />
            <button >Generate</button>
           </form>
     </header>
     <section className="colors">
           {(error) ?  (
                 <p> { error } </p>
               ) : (
                     
                list.map((color,index)=>{
                   return <SingleColour key={index} {...color} index={index}
                   hexColor={color.hex} />
                })
          
          )}
     </section>
</main>

  )
}

export default App