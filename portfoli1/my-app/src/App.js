
import './App.css';
import Home from './https:/gaikwad2028.github.portfoli.github.io/Home.js';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
      <Route exact path='/' element={<Home />} />
      <Route   path='/contact' element={<Contact />} />
      <Route    path='/about' element={<About />} />
      <Route    path='/project' element={<Project />} />
    </Routes>
    </div>
  );
}

export default App;
