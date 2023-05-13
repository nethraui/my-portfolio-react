import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Layout from './components/Layout';
import Soundbar from './components/Soundbar';

function App() {
  return (
    <>
    <Soundbar />
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
