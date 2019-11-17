import React from 'react';
import './App.css';
import Header from './header';
import Hot from './MainContent/Hot';
import {Inventory} from './MainContent/Inventory'; 
import {DesignPlace} from './MainContent/Design';
import Mail from './MainContent/Mail';
// import OutsideClickHandler from 'react-outside-click-handler';

function App() {
  return (
    <div className="App">
    	<Header />
      <Hot/>
		  <Hot/>
      <Inventory/>
      <DesignPlace/>
      <Mail/>
      {/* <OutsideClickHandler onOutsideClick={() => {alert('You clicked outside of this component!!!');}}>Hello World</OutsideClickHandler> */}
    </div>
  );
}

export default App;
