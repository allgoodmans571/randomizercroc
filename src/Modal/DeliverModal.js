import React, {Fragment} from 'react'
import './Modal.css'
import DelOk from "./DelOk";


import cancel from '../images/cancel.svg' 


import Calendar from 'react-calendar';
import axios from "axios";




export default class DeliverModal extends React.Component{
        
    state = {
        date: new Date(),
        isOpen: false,
        isCalendar: false,
        valueDate: '',
        days: {
            Sun: 'Воскресение',
            Mon: 'Понедельник',
            Tue: 'Вторник',
            Wed: 'Среда',
            Thu: 'Четверг',
            Fri: 'Пятница',
            Sat: 'Субота'
        }
    };

    // onChange = date => 


send_data() {
    let body = {data: {
        "recipient": document.querySelector('#komu').value,
        "item": document.querySelector('#item').value,
        "date": document.querySelector('#kogda').value,
        "location": document.querySelector('#kuda').value,
        "phone": document.querySelector('#nomer').value,
        "type": "Доставка"
    }}
    console.log(body)
    axios({
            method: 'post',
            url: 'http://194.242.121.124:4000/send_feedback_for_save_data',
            data: body
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}




onChange = (date) => {
    this.setState({
        date
    })
    this.setState({
        isCalendar: false
    })
    this.setState({
        valueDate: date.toString().split(' ')[3] +
            ' | ' +
            date.toString().split(' ')[2] +
            ' | ' +
            this.state.days[date.toString().split(' ')[0]]
    })
}

    render() {
        
        return (
            <Fragment>
                <button className='modBtn' onClick={() => this.setState({isOpen: true})} > Доставка </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                    <img src={cancel} className='modal_cancel' onClick={() => this.setState({isOpen: false})} />
                        <h1 className='modHead' >Доставка</h1>
                        <form className='DeliverForm'>
                          <h1 className="text">Кому доставить </h1> <br />
                            <input type='text'  id='komu' className='modInput' placeholder='ФИО' /><br />
                            <h1 className="text">Что доставить </h1> <br />
                            <input type='text' className='modInput' value={this.props.name}  id='item' /><br />
                            <h1 className="text">Дата доставки</h1> <br />
                            <select id='kogda' className='modInput' >
                                <option value='30 ноября'>30 ноября</option>
                                <option value='3 декабря'>3 декабря</option>
                                <option value='7 декабря'>7 декабря</option>
                                <option value='10 декабря'>10 декабря</option>
                                <option value='14 декабря'>14 декабря</option>
                                <option value='17 декабря'>17 декабря</option>
                            </select>
                            <h1 className="text">Куда доставить</h1> <br />
                            <input type='text' className='modInput' placeholder='Адрес'  id='kuda'/><br />
                            <h1 className="text">Куда звонить</h1> <br />
                            <input type='text' className='modInput' placeholder='+7' id='nomer'/><br />
                        </form>
                        <div className='acceptBtn'>
                            <DelOk date={this.state.valueDate} send_data={() => this.send_data()} closedWindow={()=> this.setState({isOpen: false}) } />
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }
}