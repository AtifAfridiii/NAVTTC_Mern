import React, { useContext } from 'react'
import StudentContext from './Context/Createcontext'

const Getdata = () => {
  // Use useContext directly to access the context
  const studentData = useContext(StudentContext)

  return (
    <div className="pt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Student Information</h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p><strong>Name:</strong> {studentData.name} {studentData.lastName}</p>
        <p><strong>Roll Number:</strong> {studentData.rollno}</p>
        <p><strong>Class:</strong> {studentData.class}</p>
        <p><strong>Section:</strong> {studentData.section}</p>
      </div>
    </div>
  )
}

export default Getdata
