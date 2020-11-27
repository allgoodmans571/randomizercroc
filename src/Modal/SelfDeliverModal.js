import React, {Fragment} from 'react'
import SelfDelOk from './SelfDelOk'
import './Modal.css'
import Calendar from 'react-calendar';
import axios from 'axios'

import cancel from '../images/cancel.svg' 


export default class SelfDeliverModal extends React.Component{

    state = {
        date: new Date(),
        isOpen: false,
        isCalendar: false,
        valueDate: '',
        days: {
            Jan: '01',
            Feb: '02',
            Mar: '03', 
            Apr: '04', 
            May: '05', 
            Jun: '06', 
            Jul: '07', 
            Aug: '08',
            Sep: '09',
            Oct: '10',
            Nov: '11',
            Dec: '12',
        },
        name: '',
    };

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

send_data() {
    let body = {
        data: {
            "fio": document.querySelector('#fio_inp').value,
            "item": document.querySelector('#chto_budet_zaberat').value,
            "date": document.querySelector('#samov').value,
            "type": "Самовызов",

        }
    }
    console.log(body);
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



    // onChange = date => 


    onChange = (date) => {
        let mounts = {
            "Jan":"января",
            "Feb":"февраля",
            "Mar":"марта",
            "Apr":"апреля",
            "May":"мая",
            "Jun":"июня",
            "Jul":"июля",
            "Aug":"августа",
            "Sep":"сентября",
            "Oct":"октября",
            "Nov":"ноября",
            "Dec":"декабря",
        }
        this.setState({ date })
        this.setState({ isCalendar: false})
        this.setState({ valueDate: `${date.toString().split(' ')[2]} ${mounts[date.toString().split(' ')[1]]} ${date.toString().split(' ')[3]} `})

       console.log(date.toString().split(' '));     
    }

    render() {
        return (
            <Fragment>
                <button className='modBtn' onClick={() => this.setState({isOpen: true})} > Самовывоз </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <img src={cancel} className='modal_cancel' onClick={() => this.setState({isOpen: false})} />
                        <h1 className='modHead' >Самовывоз</h1>
                        <form className='SelfDeliverForm'>
                          <h1 className="text">Кто будет забирать </h1> <br />
                            {/* eslint-disable-next-line no-restricted-globals */}
                            <input type='text' className='modInput' placeholder='ФИО' id='fio_inp' /><br />
                            <h1 className="text">Что будет забирать </h1> <br />
                            <input type='text' className='modInput' id='chto_budet_zaberat' value={this.props.name} /><br />
                            <h1 className="text">Дата самовывоза</h1> <br />
                            {/* <div>
                                { this.state.isCalendar && <Calendar 
                            className='calendar'
                            onChange={this.onChange}
                            value={this.state.date}
                            />} */}
                            {/* <input type='text' id='samov' onClick={()=>this.setState({ isCalendar: true})} value={this.state.valueDate} className='modInput' placeholder={'12 ноября 2020, 15:15'} /><br /> */}
                            {/* </div> */}
                            <select id='samov' className='modInput' >
                                <option value='1 декабря'>1 декабря</option>
                                <option value='4 декабря'>4 декабря </option>
                                <option value='8 декабря'>8 декабря</option>
                                <option value='11 декабря'>11 декабря</option>
                                <option value='15 декабря'>15 декабря</option>
                                <option value='18 декабря'>18 декабря</option>
                            </select>
                        </form>
                        <div className='acceptBtn'>
                        <SelfDelOk date={this.state.valueDate} send_data={() => this.send_data()} closedWindow={() => this.send_data()} />
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }

}
