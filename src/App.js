import React, { useState } from "react";
import logo from './images/logo.png'
import './index.css'
import crateClosed from './images/crateClosed.svg'
import axios from 'axios'

const logoStyles = {
  img: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '30%'
  }
};

let input_styles = {
  input: {
    color: '#00A460',
    background: '#313131 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    border: '1px solid #101010',
    borderRadius: '27px',
    opacity: 1,
    marginTop: '40px',
    height: '30px',
    textAlign: 'center',
  }
};

let code;

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
    code = e.target.value;
  }
  return {
    value,
    onChange,
  };
}


function handleClick(e) {    
  e.preventDefault(); 
  if (code !== undefined) {
    axios.post('http://213./check_code', {
      code: code
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } else {
    alert('Поле не может быть пустым')
  }
}


function App() {
  const inputProps = useInput('');
    
  


  return (
    <div className='wrapper'>
    <img src={logo} style={logoStyles.img} alt='logo'/>
    <div className='content' >
        <img src={crateClosed} className='box' alt='crate'/>
        <input {...inputProps} style={input_styles.input} placeholder='Введите код' />
        <div className='div_for_btn' >
        <button className='btn'onClick={handleClick} > OK! </button>
        </div> 
        
    </div>
    

    </div>
  );
}

export default App;
