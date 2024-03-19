
import SkillSec from "./Components/SkillSec"
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import { BrowserRouter } from "react-router-dom";
import DemoCards from './component/DemoCards'
import Footer from './component/Footer';
import OnlinePlateForm from './component/OnlinePlateForm';
import Main from './component/Main';
import Reviews from './component/Reviews';
import Testimonial from './component/Testimonial';
import ImageGrid from "./screens/ImageGrid"
import Performance from "./component/Performance"
import Courses from "./screens/Courses"
import Apply from "./component/Apply"

function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Courses/>
      <Main />
      <SkillSec/>
      <OnlinePlateForm />
      <ImageGrid/>
      <Performance/>
      <DemoCards/>
      <Testimonial/>
      <Reviews/>
      <Footer />
      <Apply/>
    </BrowserRouter>

  )
}

export default App
