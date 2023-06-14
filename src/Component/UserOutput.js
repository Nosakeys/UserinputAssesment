import React from 'react'

const UserOutput = (props) => {
  return (
    <div id='output'>
        {/* the output component */}
        <p>My name is {props.username} and i am a programmer</p>
    </div>
  )
}

export default UserOutput
