import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "@/Pages/Navbar"
import ServicePage from "./Components/ServicePage"
import Home from "./Pages/Home"
import Claim from './Pages/Claim'
import Footer from './Pages/Footer'
import Support from './Pages/Support'
import MyPolicy from './Pages/MyPolicy'
import Internationaltravel from './Components/internationaltravel';
import AdminDesk from './Pages/AdminDesk'
import AmaxBuyins from './Components/AmaxBuyins'





function App() {
  const location = useLocation();
  const hideNavbarRoutes =['/AmaxBuyins'];
  const shouldHideLayout  = hideNavbarRoutes.includes(location.pathname);
  return (  
    <>
      {!shouldHideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/service/:type" element={<ServicePage />} />
         <Route path="/claim/:insuranceType" element={<Claim />} />
        <Route path="/support" element={<Support />} />
        <Route path="/MyPolicy" element={<MyPolicy />} />
        <Route path='/international-travel' element={<Internationaltravel/>} />
        <Route path='AdminDesk'element={<AdminDesk />} />
        <Route path='AmaxBuyins' element={<AmaxBuyins />} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App