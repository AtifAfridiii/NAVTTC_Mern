import './App.css'
import Navbar from './Reusable/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import HomeChild from './components/Home/HomeChild'
import HomeGrandChild from './components/Home/HomeGrandChild'
import StudentProvider from './components/Context/useContext'
import Getdata from './components/getdata'

function App() {
  // Image URLs for different pages
  let HomeData = 'https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  let AboutData = 'https://images.pexels.com/photos/21323/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  let BlogsData = 'https://images.pexels.com/photos/1582619/pexels-photo-1582619.jpeg'

  let Grandata = 'This is grand child data coming from parent Home';

  return (
    <>
      <Navbar />
      <StudentProvider>
        <Routes>
          <Route path='/' element={<Home name={HomeData} Grandata={Grandata} />} />
          <Route path='/about' element={<About name={AboutData} />} />
          <Route path='/blogs' element={<Blogs name={BlogsData} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/homechild' element={<HomeChild />} />
          <Route path='/homegrandchild' element={<HomeGrandChild />} />
          <Route path='/Getdata' element={<Getdata />} />
        </Routes>
      </StudentProvider>
    </>
  )
}

export default App
