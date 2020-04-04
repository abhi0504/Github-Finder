import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/navbar'
import User from './components/users/user'
import './App.css';


function App() {

  return (
    <div>
     <div>
      <Navbar />
     </div>
     <div className='container'>
     <User/>
     </div>
    </div>
  );
}

export default App;
