import React, {Fragment} from 'react'
import './Modal.css'
import DelOk from "./DelOk";
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
        let body = {data: [
                document.querySelector('#komu').value,
                document.querySelector('#item').value,
                document.querySelector('#kogda').value,
                document.querySelector('#kuda').value,
                document.querySelector('#nomer').value
            ]}
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
        this.setState({isOpen: false})
    }





    onChange = (date) => {
        this.setState({ date })
        this.setState({ isCalendar: false})
        this.setState({ valueDate: 
            date.toString().split(' ')[3] + 
            ' | ' + 
            date.toString().split(' ')[2]+ 
            ' | ' +
            this.state.days[date.toString().split(' ')[0]]})
    }

    // focusTextInput() {
    //     console.log(1);
    //     this.setState({isCalendar: true})
    // }

    render() {
        
        return (
            <Fragment>
                <button className='modBtn' onClick={() => this.setState({isOpen: true})} > Доставка </button>
                {this.state.isOpen && <div className='modal' >
                    <div className='modal-body'>
                        <h1 className='modHead' >Доставка</h1>
                        <form className='DeliverForm'>
                          <h1 className="text">Кому доставить </h1> <br />
                            <input type='text'  id='komu' className='modInput' placeholder='ФИО' /><br />
                            <h1 className="text">Что доставить </h1> <br />
                            <input type='text' className='modInput' value={this.props.name}  id='item' /><br />
                            <h1 className="text">Дата доставки</h1> <br />
                            <div>
                                { this.state.isCalendar && <Calendar 
                            className='calendar'
                            onChange={this.onChange}
                            value={this.state.date}
                            />}
                            
                            <input type='text' onClick={()=>this.setState({ isCalendar: true})} value={this.state.valueDate} className='modInput'  id='kogda' placeholder={'12 ноября 2020, 15:15'} /><br />
                            </div>
                            <h1 className="text">Куда доставить</h1> <br />
                            <input type='text' className='modInput' placeholder='Адрес'  id='kuda'/><br />
                            <h1 className="text">Куда звонить</h1> <br />
                            <input type='text' className='modInput' placeholder='+7' id='nomer'/><br />
                        </form>
                        <div className='acceptBtn'>
                            <DelOk date={this.state.valueDate} closedWindow={()=>this.setState({ isOpen: false})} />
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }
}