import React from 'react'
import { Link,  } from 'react-router-dom';
import HomeChild from './HomeChild';

const Home = (props) => {


    let data = ' This is a home page ';
    let PropData = props.name;




  return (
    <>
     <div className='pt-20'>
     <h1>{data}</h1>
     <img className='w-50 h-50 rounded-full' src={props.name} alt="" />
     <Link to="/contact" state={{data , PropData}}>
      Go to Contact
    </Link>
    <br />

         <HomeChild Grandata={props.Grandata}/>
      </div>
    </>
  )
}

export default Home
