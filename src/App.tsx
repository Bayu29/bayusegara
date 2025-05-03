import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Header from './component/Header';
import Service from './component/Service';
import Project from './component/Project';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Service></Service>
      <Project></Project>
      <Footer></Footer>
    </>
  )
}

export default App
