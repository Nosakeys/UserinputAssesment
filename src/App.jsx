import React from 'react'
import UserInput from './Component/UserInput'
import UserOutput from './Component/UserOutput'
import { useState } from 'react'
const App = () => {

  // using Hook
  const [username, setfirst] = useState('Tobi')

  const changeEventHandler = (e) => {
    setfirst(e.target.value)
  }
  return (
    // outputing the components



   <div className='container'>
   <UserInput username= {changeEventHandler}  />
   <UserOutput username= {username} />
   </div>
  )
}

export default App
