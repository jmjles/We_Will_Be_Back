import React from 'react';
import './assets/css/style.css';
import LandingPage from './assets/components/landing_page';
import Charts from './assets/components/charts'
function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Charts/>
    </div>
  );
}

export default App;
