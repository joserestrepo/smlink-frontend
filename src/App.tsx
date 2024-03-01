import React from 'react'
import './App.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomeComponent from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeComponent,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
