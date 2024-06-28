import React from 'react'

function About({address,arrdata}) {
    console.log(arrdata);
  return (
    <div>
        <h1>About Page</h1>
        <h1>{address}</h1>
    </div>
  )
}

export default About