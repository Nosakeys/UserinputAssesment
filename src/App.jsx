import React from 'react'
import UserInput from './Component/UserInput'
import UserOutput from './Component/UserOutput'
const App = () => {
  return (
    // outputing the components
   <div className='container'>
   <UserInput />
   <UserOutput/>
   <UserOutput/>
   <UserOutput/>
   <UserOutput/>
   
   </div>
  )
}

export default App