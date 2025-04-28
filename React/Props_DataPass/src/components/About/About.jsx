import React from 'react'

const About = (props) => {
  return (
   <>
    <div className='pt-20'>
  <h1>this is about page  </h1>
  <img className='w-50 h-50 rounded-full' src={props.name} alt="" />
      </div>
   </>
  )
}

export default About
