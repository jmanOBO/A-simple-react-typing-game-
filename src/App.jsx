import React, {useState } from 'react'

const App = () => {
  const quotes=["LA Confidential","The sky is blue","I'll be on my own shit"];
  const [curQuote, setCurQuote]=useState(null);
  const [start, setStart]=useState(null);
  const [end, setEnd]=useState(null);
  const [input,setInput]=useState("");
 
  const handleChange=(e)=>{
  const value=e.target.value
   setInput(value);

   if(value.toLowerCase()===quotes[curQuote].toLowerCase()){
    const end=Date.now()
    setEnd(end);
   }
  }

  const handleOnclick=()=>{
    const genRandomNum=Math.floor(Math.random()*quotes.length);
    setCurQuote(genRandomNum);
    const now=Date.now();
    setStart(now);
  }

  return (
    <>
    <div>
      <h1>Practice your typing</h1>
      {curQuote!==null && <h3 className='quote'>{quotes[curQuote]}</h3>}

      {(start!==null && end!==null) && <h3 className='quote'>Congratulations you finished in {(end-start)/1000} seconds</h3>}
      <p>Click start to have a quote displayed. Type the quote as fast as you can!</p>
    </div>

    <input className='writeInp' value={input} onChange={handleChange}/><br/><br/>
    <button onClick={handleOnclick}>Start</button>
    </>
  )
}

export default App