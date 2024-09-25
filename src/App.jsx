// packages
import { Divider,Container } from '@chakra-ui/react'
import { Routes, Route,useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// local imports
import FrontPage from "./pages/FrontPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

function App() {
 const location = useLocation();
 const navigate = useNavigate();

 useEffect(() => {
   if (location.pathname.match(/\/{2,}/)) {
     navigate(location.pathname.replace(/\/{2,}/g, "/"), { replace: true });
   }
 }, [location, navigate]);

  return (
    <>
     <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
