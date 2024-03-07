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

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <OnlinePlateForm />
      <DemoCards/>
      <Testimonial/>
      <Reviews/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
