import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'normalize.css'
import './styles/style.scss'

import 'react-typist/dist/Typist.css'
import Home from './components/Home'
import NavBar from './components/NavBar'


const App = () => {
  return <>
    <NavBar />
    <Home /> 
  </>
}







export default App