import logo from './logo.svg';
import './App.css';
import Login from '../src/pages/Login';
import Hero from "../src/pages/Hero";
import Hero1 from "../src/pages/Hero1";
import Navbar from './pages/AppNavbar';
import Contact from './pages/Contact';
import Plastic from './pages/Plastic';
import Agri from './pages/Agri';
import Industries from './pages/Industries';
import Electronic from './pages/Electronic';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Home" element={<Hero/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Home1" element={<Hero1/>}/>
      <Route path="/Plastic" element={<Plastic/>}/>
      <Route path="/Agri" element={<Agri/>}/>
      <Route path="/Electronic" element={<Electronic/>}/>
      <Route path="/Industries" element={<Industries/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
