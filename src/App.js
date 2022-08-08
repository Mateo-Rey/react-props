import React from 'react';
import './App.css';
import Menubar from './components/Menubar.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';
import Coffee from './components/coffee';
function App() {
  const [name, setName] = useState('')
  return (
    <>
    <Menubar name={name} setName={setName}/>
    <Main name={name} />
    <Coffee/>
    <Footer/>
    </>
   
  );
}

export default App;
