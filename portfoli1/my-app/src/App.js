
import './App.css';
import Home from './Home';
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
      <Route  exact path='/contact' element={<Contact />} />
      <Route   exact path='/about' element={<About />} />
      <Route   exact path='/project' element={<Project />} />
    </Routes>
    </div>
  );
}

export default App;