import React from 'react'
import StudentContext from './Createcontext'

const StudentProvider = ({ children }) => {
    // Student data that will be shared through context
    const studentData = {
        name: 'Ali',
        rollno: 123,
        class: '10th',
        section: 'A',
        lastName: 'Khan'
    }

    return (
        <StudentContext.Provider value={studentData}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;
