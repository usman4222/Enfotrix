
import SkillSec from "./Components/SkillSec"
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoCards from './component/DemoCards'
import Footer from './component/Footer';
import OnlinePlateForm from './component/OnlinePlateForm';
import Reviews from './component/Reviews';
import Testimonial from './component/Testimonial';
import ImageGrid from "./screens/ImageGrid"
import Performance from "./component/Performance"
import Courses from "./screens/Courses"
import Companies from "./component/Companies"
import StudentIntake from "./component/StudentIntake"
import IntakeForm from "./component/IntakeForm"
import PaymentProcess from "./component/PaymentProcess"
import About from "./component/About"
import Apply from "./component/Apply"
import Main from "./component/Main"


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/graphic-design' element={<Courses/>}/>
        <Route path="student-intake" element={<StudentIntake/>}/>
        <Route path="/payment" element={<PaymentProcess/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
{/* <Main/>
<Courses/>
<Companies />
<SkillSec />
<OnlinePlateForm />
<ImageGrid />
<Performance />
<Testimonial />
<Reviews />
<DemoCards />
<StudentIntake/>
<About/>
<IntakeForm/>
<PaymentProcess/> */}