
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
const App =()=>{
    return (

      <Router>
<Navbar />
        <Routes>
          <Route exact path="/" element={<News pageSize={12} key ="general " country='in' category='general' />}></Route>
          <Route exact path="/business" element={<News pageSize={12} country='in' key ="business " category='business' />}> </Route>
          <Route exact path="/sports" element={<News pageSize={12} country='in' key ="sports" category='sports' />}>   </Route>
          <Route exact path="/entertainment" element={<News pageSize={12} country='in'  key ="entertainment" category='entertainment' />}>   </Route>
          <Route exact path="/health" element={<News pageSize={12} country='in'key ="health" category='health' />}>   </Route>
          <Route exact path="/space" element={<News pageSize={12} country='in' key ="space" category='space' />}>   </Route>
          <Route exact path="/technology" element={<News pageSize={12} key ="technology" country='in' category='technology' />}></Route>
          <Route exact path="/science" element={<News pageSize={12} key ="science" country='in' category='science' />}>
          </Route>
        </Routes>
      </Router>

    )
  }
export default App;
