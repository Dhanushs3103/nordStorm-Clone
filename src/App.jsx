// packages
import { Divider,Container } from '@chakra-ui/react'

// local imports
import AboveNav from './components/AboveNav.jsx'
import Navbar from './components/Navbar.jsx'
import BelowNav from './components/BelowNav.jsx'
import Sponsor from './components/Sponsor.jsx'
import BannerSlider from './components/BannerSlider.jsx'
import BelowBanner from './components/BelowBanner.jsx'
import BelowTop from './components/BelowTop.jsx'
import BelowSlider from './components/BelowSlider.jsx'
import GetInspired from './components/GetInspired.jsx'
import GreatDeals from './components/GreatDeals.jsx'
import MarcusFree from './components/MarcusFree.jsx'
import Category from './components/Category.jsx'
import Currently from './components/Currently.jsx'
import Trending from './components/Trending.jsx'
import Footer from './components/Footer.jsx'


function App() {


  return (
    <>
      <AboveNav />
      <Navbar />
      < Divider borderColor={"gray"}  p={"0 10px"} margin={"auto"} w={"96%"}/>
      <BelowNav/>
      <Container maxW={"96%"}  mt={"40px"} h={"fit-content"} >
      <Sponsor/>
      <BannerSlider/>
      <BelowBanner/>
      <BelowTop/>
      <GetInspired/>
      <BelowSlider/>
      <GreatDeals/>
      <MarcusFree/>
      <Category/>
      <Currently/>
      <Trending/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
