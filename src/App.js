import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './Components/Results';
import Concept from './Components/Concept';
import LoadingBar from 'react-top-loading-bar'
import {useState} from 'react';
// import NewsResults from './Components/NewsResults';


function App() {
  
  const [progress, setProgress] = useState(0)

  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Results choice="general"/>}/>
            <Route path="business" element={<Results choice="business" progress={setProgress}/>}/>
            <Route path="entertainment" element={<Results choice="entertainment"progress={setProgress}/>}/>
            <Route path="science" element={<Results choice="science" progress={setProgress}/>} />
            <Route path="sports" element={<Results choice="sports" progress={setProgress}/>} />
            <Route path="general" element={<Results choice="general" progress={setProgress} />} />
            <Route path="health" element={<Results choice="health" progress={setProgress}/>} />
            <Route path="technology" element={<Results choice="technology" progress={setProgress}/>} />
        </Routes>
      </BrowserRouter>
  <LoadingBar
  height={3}
  color='#f11946'
  progress={progress} 
/>
    </>
  );
}

export default App;
