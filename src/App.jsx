import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from '../components/header'
import Meme from './meme'
import Data from '../memesData.js'

function App() {
  return (
    <div className="container">
         <Header />
         <Meme />
    </div>
  )
}

export default App
