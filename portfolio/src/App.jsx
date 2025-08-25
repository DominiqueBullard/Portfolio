import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Nav.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Projects from './pages/projects.jsx';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element ={<Contact />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
