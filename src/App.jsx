import { Routes, Route } from 'react-router-dom'
import Navbar from "@/Pages/Navbar"
import ServicePage from "./Components/ServicePage"
import Home from "./Pages/Home"
import Claim from './Pages/Claim'
import Footer from './Pages/Footer'
import Support from './Pages/Support'
import MyPolicy from './Pages/MyPolicy'
import Internationaltravel from './Components/internationaltravel';





function App() {
  return (  
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/service/:type" element={<ServicePage />} />
         <Route path="/claim/:insuranceType" element={<Claim />} />
        <Route path="/support" element={<Support />} />
        <Route path="/MyPolicy" element={<MyPolicy />} />
        <Route path='/international-travel' element={<Internationaltravel/>} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App