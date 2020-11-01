import React from "react";
import logo from './images/logo.png'
import './index.css'
import crateClosed from './images/crateClosed.svg'
const logoStyles = {
  img: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '30%'
  }
};
const crateStyles = {
  img: {
    position: 'absolute',
    top: '30%'
  }
};


function App() {

  return (
    <div className='wrapper'>
    <img src={logo} style={logoStyles.img} alt='logo'/>
    <img src={crateClosed} style={crateStyles.img} alt='crate'/>

    </div>
  );
}

export default App;
