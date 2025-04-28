import React from 'react'
import { Link } from 'react-router-dom'
import HomeGrandChild from './HomeGrandChild'


const HomeChild = (props) => {

  return (
    <div className='pt-20'>
    <h1 >This is Home child</h1>
    <br />
    <HomeGrandChild Grandata={props.Grandata} />
    </div>

  )
}

export default HomeChild
