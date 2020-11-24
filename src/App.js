import React, { useState } from "react";
import logo from './images/KROK.svg'
import './index.css'
import crateClosed from './images/crateClosed.svg'
import crateOpened from './images/crateOpened.svg'
import SelfDeliverModal from './Modal/SelfDeliverModal'
import DeliverModal from "./Modal/DeliverModal"
import BF from './images/blackfriday.svg'
// import krok from './images/KROK.svg'
// import axios from 'axios'


const eventEmitter = require('events');
window.ee = new eventEmitter();



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




function App() {
  const [count, set_count] = useState(0);
  const inputProps = useInput('');
  console.log(window.location.search);

  let ItemName = '{ItemName}';
function handleClick(e) {    
  e.preventDefault(); 

  set_count(1);
  // if (code !== undefined) {
  //   axios.post('http://213./check_code', {
  //     code: code
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // } else {
  //   alert('Поле не может быть пустым')
  // }
}

let Content_ = <p/>;

  if (count === 0) {
    Content_ = <div>
      <div className='content' >
          <img src={BF} className="BF" />
          <img src={crateClosed} className='box' alt='crate'/>
          <input {...inputProps} style={input_styles.input} placeholder='Введите код' />
          <div className='div_for_btn' >
          <button className='btn'onClick={handleClick} > Получить приз </button>
          </div> 
      </div>
    </div> 
  } else {
    Content_ =
        <div>
          <div className='content' >
            <p className='itemName'> Ты выиграл {ItemName}!</p>
            <img src={crateOpened} className='box' alt='crate'/>
            <div className='div_for_btn deliveryBtn' >
              <SelfDeliverModal/>
              <DeliverModal/>
            </div>

          </div>
        </div>

  }

  return (
    <div className='wrapper'>
      
      {Content_}

      <div className='div_for_logo'>
        
            <img src={logo} className='logo' alt='logo'/>
        </div>
    </div>
  );
}

export default App;
