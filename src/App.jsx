
import './App.css'
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import Courses from "./Pages/Courses"
import StudentIntake from "./component/StudentIntake"
import PaymentProcess from "./component/PaymentProcess"
import About from "./component/About"
import Main from "./component/Main"
import FAQ from './Pages/FAQ';
import Sidebar from './component/Sidebar';
import Batches from './component/Batches';
import CourseDetailsPage from './Pages/CourseDetailsPage';
import Mentors from './Pages/Mentors';


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
        <Route path="/faqs" element={<FAQ/>}/>
        <Route path="/batches" element={<Batches/>}/>
        <Route path="/courses" element={<CourseDetailsPage/>}/>
        <Route path="/mentors" element={<Mentors/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App