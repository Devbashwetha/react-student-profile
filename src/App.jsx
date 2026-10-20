import React from 'react'
import Home from './components/Home.jsx'
import Content from './components/Content.jsx'
import {BrowserRouter, Routes
  , Route} from "react-router-dom";
import  students from'./data';


// let router = createBrowserRouter([
//   { 
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/content",
//     element: <Content />,
//   }
// ])
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App