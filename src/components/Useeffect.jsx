import React, { useEffect } from 'react'
import { useState, useeffect } from 'react'


const Useeffect = () => {
  const [count, setCount] = useState(0)
  var change = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    alert("Hello")
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={change}>click</button>
    </div>
  )
}

export default Useeffect