import React, { useState, useEffect } from "react";
import logo from './images/KROK.svg'
import './index.css'
import crateClosed from './images/crateClosed.svg'
import crateOpened from './images/crateOpened.svg'
import SelfDeliverModal from './Modal/SelfDeliverModal'
import DeliverModal from "./Modal/DeliverModal"
import BF from './images/blackfriday.svg'
import axios from 'axios'

// ----------------------------------------------------------- Импортирование картинок>
import powerbank from './images/items/Powerbank.png'
import notewhite from './images/items/Блокнот белый.png'
import dodopizza from './images/items/Додопицца промокод.png'
import popwhite from './images/items/Попсокет белый.png'
import popgray from './images/items/Попсокет зеленый.png'
import pufik from './images/items/Пуфик.png'
import blokergray from './images/items/Серый блокер для камеры.png'
import smartwatch from './images/items/Смарт будильник.png'
import sportbundle from './images/items/Спорт набор.png'
import transtable from './images/items/Столик-трансформер.png'
import blokerblack from './images/items/Черный блокер для камеры.png'
// ----------------------------------------------------------- Импортирование картинок>

const eventEmitter = require('events');
window.ee = new eventEmitter();

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


  const[name, setName] = useState()
  const[group, setGroup] = useState('')
  const[itemPath, setItemPath] = useState()

  code = window.location.search.split('=') [1]
  console.log(code);

function handleClick(e){
  e.preventDefault()
  set_count(1)
}






useEffect(() => {

  if (code !== undefined) {
    axios.get(`http://194.242.121.124:4000/get_code?param=${code}`)
    .then(function (response) {
      console.log(response);
      setName((response.data.name).replace(/\s*$/,''))
      setItemPath((response.data.name).replace(/\s*$/,''))
      console.log(name)


    if (response.data.name.replace(/\s*$/,'') === 'Powerbank') {
      setItemPath(powerbank)
    }else if (response.data.name.replace(/\s*$/,'') === 'Блокнот белый') {
      setItemPath(notewhite)
    }else if (response.data.name.replace(/\s*$/,'') === 'Додопицца промок') {
      setItemPath(dodopizza)
    }else if (response.data.name.replace(/\s*$/,'') === 'Попсокет белый') {
      setItemPath(popwhite)
    }else if (response.data.name.replace(/\s*$/,'') === 'Попсокет зеленый') {
      setItemPath(popgray)
    }else if (response.data.name.replace(/\s*$/,'') === 'Пуфик') {
      setItemPath(pufik)
    }else if (response.data.name.replace(/\s*$/,'') === 'Серый блокер для камеры') {
      setItemPath(blokergray)
    }else if (response.data.name.replace(/\s*$/,'') === 'Смарт будильник') {
      setItemPath(smartwatch)
    }else if (response.data.name.replace(/\s*$/,'') === 'Спорт набор') {
      setItemPath(sportbundle)
    }else if (response.data.name.replace(/\s*$/,'') === 'Столик-трансформер') {
      setItemPath(transtable)
    }else if (response.data.name.replace(/\s*$/,'') === 'Черный блокер для камеры') {
      setItemPath(blokerblack)
    } else {
      console.log('error')
    }



      if (response.data.int === 1) {
        setGroup('Black Box Мерч')
        } else if (response.data.int === 2) {
        setGroup('Black Box Wellbeing')
        } else if (response.data.int === 3){
          setGroup('Black Box Рабочее место')
        } else {
          setGroup('error')
          alert('Ошибка кода')
        }




    })
    .catch(function (error) {
      console.log(error);
    });
  } else {
    alert('Поле не может быть пустым')
  }
}, [null]); //null не дает useEffect обновить отрисовку








let Content_ = <p/>;

  if (count === 0) {
    Content_ = <div>
      <div className='content' >
          <img src={BF} className="BF"  alt={'Black Friday'}/>
        <div style={{textAlign: 'center'}}>
          <h1 style={{color: '#00A460', fontSize: '30px'}}>{group}</h1>
        </div>
          <img src={crateClosed} className='box' alt='crate'/>
          {/* <input {...inputProps} style={input_styles.input} placeholder='Введите код' /> */}
          <div className='div_for_btn' >
          <button className='btn' onClick={handleClick} > Узнать что внутри </button>
          </div> 
      </div>
    </div> 
  } else {
    Content_ =
        <div>
          <div className='content' >
            <p className='itemName'>{name}!</p>
            <img src={itemPath} className='itemImg' alt='image' style={{width: '70%', marginBottom: '-90px', marginLeft: '-20px'}}/>
            <img src={crateOpened} className='box' alt='crate' style={{zIndex: -1}} />
            <div className='div_for_btn deliveryBtn' >
              <SelfDeliverModal  name={name} group={group} />
              <DeliverModal  name={name} group={group} />
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
