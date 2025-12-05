import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { Analytics } from '@vercel/analytics/react';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
        <Analytics />
      </main>
    </div>
  )
}

export default App

