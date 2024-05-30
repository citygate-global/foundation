import logo from './logo.svg';
import './Assets/Styles/app.css';
import { Navigate, Route, Routes, useHistory } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import OurWorks from './pages/our-works';
import HowWeWork from './pages/how-we-work';
import Leadership from './pages/leadership';
import Application from './pages/application';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Media from './pages/gallery';
import { useEffect } from 'react';

function App() {

  
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to='/home' />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about-us' element={<About />}/>
      <Route path='/our-works' element={<OurWorks />}/>
      <Route path='/how-we-work' element={<HowWeWork />}/>
      <Route path='/leadership' element={<Leadership />}/>
      <Route path='/application' element={<Application />}/>
      <Route path='/media' element={<Gallery />}/>
      <Route path='/contact-us' element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
