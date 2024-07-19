// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 const App = ()=>{
  // render method is used to compile the JSX to html and then render the html on the screen
  const pageSize = 9; // a class member cannot have 'const' keyword

 const [progress, setProgress] = useState(0);

 const [searchQuery, setSearchQuery] = useState('');
   
 const handleSearch = (query) =>{
    setSearchQuery(query);
    setProgress(10);
 }

 const handleReset = ()=>{
    setSearchQuery('');
 }

    return (
      <div>
        <Router>
          <Navbar handleSearch={handleSearch} onReset={handleReset}/>
          <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" searchQuery={searchQuery}/>}></Route>

            <Route exact path="/business" element={<News setProgress={setProgress}key="business" pageSize={pageSize} country="in" category="business" searchQuery={searchQuery}/>}></Route>

            <Route exact path="/entertainment" element={<News setProgress={setProgress}key="entertainment" pageSize={pageSize} country="in" category="entertainment" searchQuery={searchQuery}/>}></Route>

            <Route exact path="/general" element={<News setProgress={setProgress}key="general" pageSize={pageSize} country="in" category="general" searchQuery={searchQuery}/>}></Route>

            <Route exact path="/health" element={<News setProgress={setProgress}key="health" pageSize={pageSize} country="in" category="health" searchQuery={searchQuery}/>}></Route>

            <Route exact path="/science" element={<News setProgress={setProgress}key="science" pageSize={pageSize} country="in" category="science" searchQuery={searchQuery}/>}></Route>


            <Route exact path="/sports" element={<News setProgress={setProgress}key="sports" pageSize={pageSize} country="in" category="sports" searchQuery={searchQuery}/>}></Route>

            <Route exact path="/techonology" element={<News setProgress={setProgress}key="techonology" pageSize={pageSize} country="in" category="techonology" searchQuery={searchQuery}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }

export default App