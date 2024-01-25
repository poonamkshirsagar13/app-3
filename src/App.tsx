import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopPanel from './components/TopPanel';
import LeftPanel from './components/bottom/LeftPanel';
import RightPanel from './components/bottom/RightPanel';
import { CartProvider } from './context/cart';

function App() {
  const [appCounter, setAppCounter] = useState(0);
  const appButtonCounter = () => {
    setAppCounter(appCounter+1);
  }

  return <>
    <CartProvider propName = 'amit'>
      <div style={{backgroundColor:'yellow', height:'25vh'}}>
        <TopPanel appCounter={appCounter} appButtonCounter={appButtonCounter}></TopPanel>
      </div>
      <div style={{display:'inline-flex', width:'100%', height:'75vh'}}>
        <div style={{width:'50%', backgroundColor: 'red', border: 'solid,2px,black'}}>
          <LeftPanel appCounter={appCounter} appButtonCounter={appButtonCounter}>
          </LeftPanel>
        </div>
        <div style={{width:'50%', backgroundColor: 'green', border: 'solid,2px,black'}}>
          <RightPanel appCounter={appCounter} appButtonCounter={appButtonCounter}></RightPanel>
        </div>
      </div>
      <p>Hello World</p>
    </CartProvider>
  </>;
}

export default App;
