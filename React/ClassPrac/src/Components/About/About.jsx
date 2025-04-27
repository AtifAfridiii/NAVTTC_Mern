import React, { useEffect,useState } from 'react'
import axois from 'axios';

export const About = () => {

    const [data,SetData] = useState([]);

    let dataitem = JSON.stringify(data);
    localStorage.setItem('data', dataitem );
        let dataitem2 = localStorage.getItem('data');
        console.log(dataitem2);


    console.log(data);
    useEffect(()=>{
       axois.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        console.log(res);

       let Data =  res.data;
       SetData(Data);

       }).catch((err)=>{

        console.log(`Error is ${err}`);
       })

    },[])

  return (
   <>
    <div>
   <h1>This about page here i will use axios to fetch data from api later</h1>
   {
    data.map((item)=>{
        return <h1>{item.name}</h1>

    })
    }
</div>
   </>
  )
}

