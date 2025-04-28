import React, { useContext } from 'react'
import StudentContext from '../Context/Createcontext'

const Blogs = (props) => {
  // Using useContext directly to access the context
  const studentData = useContext(StudentContext)

  return (
    <>
      <div className='pt-20 p-4'>
        <h1 className='text-2xl font-bold mb-4'>This is blogs page</h1>
        <p className='mb-2'>Current student: {studentData.name} from {studentData.class}</p>
        <img className='w-50 h-50 rounded-full mb-4' src={props.name} alt="Blog header" />
      </div>
    </>
  )
}

export default Blogs
