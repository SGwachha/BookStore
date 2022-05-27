import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "../Blog/BlogMainPage"
import MainContactPage from "../ContactUs/MainContactPage"
import LandingPage from "../Components/LandingPage"
import MainTemplate from "../Payments/MainTemplate"
import PaymentsMainpage from "../Payments/PaymentsMainpage"
import Main from "../product/ProductMainPage"
import MainResearchPage from "../ResearchPage/MainResearchPage"
import Mainfooter from "../Footer/Mainfooter"
import Navbar from "../Components/Navbar"

const Routing = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/a" element={<Main />} />
        <Route path="/blog" element={<MainPage />} />
        <Route path="/payments" element={<PaymentsMainpage/>}/>
        <Route path="mainTemplate" element={<MainTemplate/>}/>
        <Route path="/research" element={<MainResearchPage/>}/>
        <Route path="/Contact" element={<MainContactPage/>}/>
      </Routes>
      <Mainfooter/>
    </BrowserRouter>
  )
}

export default Routing