import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';
import Navbar from './Components/navbar.jsx'; 

export default function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
