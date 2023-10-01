import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import bg1 from './img/bg1.jpg';
import bg3 from './img/bg3.jpg';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  document.body.style.backgroundImage = `url(${bg1})`;
  let [Bg, setBg] = useState(false);
  const input = document.getElementsByClassName('text-input');
  const enable = () => {
    if (mode === 'light') {
      setMode('dark');
      setBg(Bg = true);

      for (var i = 0; i < input.length; i++) {
        input[i].style.borderColor = '#9992929c';
        input[i].style.color = 'white'
      }
    } else {
      setMode('light');
      for (i = 0; i < input.length; i++) {
        input[i].style.color = '#042743'
      }
      setBg(Bg = false);
    }
  };

  document.body.style.backgroundImage = `url(${Bg ? bg3 : bg1})`;

  return (
    <div>
      <Navbar mode={mode} enable={enable} />
      <Routes>
        <Route path='/TextWizard/' element={<div id="main" className='container '><TextForm mode={mode} /></div>}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;