
import './App.css'
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import Courses from "./Pages/Courses"
import StudentIntake from "./component/StudentIntake"
import PaymentProcess from "./component/PaymentProcess"
import About from "./component/About"
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