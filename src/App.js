import React from 'react';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';

function App() {
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </div>
    </div>
  );
}

export default App;
