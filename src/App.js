import React from 'react';
import './App.css';
import Menubar from './components/Menubar.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('Mason')
  return (
    <>
    <Menubar/>
    <Main name={name}  total={23}/>
    <Footer/>
    </>
   
  );
}

export default App;
