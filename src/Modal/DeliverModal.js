import React, {Fragment} from 'react'
import './Modal.css'
import DelOk from "./DelOk";
import Calendar from 'react-calendar';




export default class DeliverModal extends React.Component{
        
    
    state = {
        date: new Date(),
        isOpen: false,
        isCalendar: false,
        valueDate: ''
    };

    // onChange = date => 

    onChange = (date) => {
        this.setState({ date })
        this.setState({ date })
        console.log(date);
        console.log(1);
        this.setState({ isCalendar: false})
        this.setState({ valueDate: date})
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
                            <input type='text' className='modInput' placeholder='ФИО' /><br />
                            <h1 className="text">Что доставить </h1> <br />
                            <input type='text' className='modInput' placeholder='Ручка с лого КРОК' /><br />
                            <h1 className="text">Дата доставки</h1> <br />
                            <div>
                                { this.state.isCalendar && <Calendar 
                            className='calendar'
                            onChange={this.onChange}
                            value={this.state.date}
                            />}
                            
                            <input type='text' onClick={()=>this.setState({ isCalendar: true})} value={this.state.valueDate} className='modInput' placeholder={'12 ноября 2020, 15:15'} /><br />
                            </div>
                            <h1 className="text">Куда доставить</h1> <br />
                            <input type='text' className='modInput' placeholder='Адрес' /><br />
                            <h1 className="text">Куда звонить</h1> <br />
                            <input type='text' className='modInput' placeholder='+7'/><br />
                        </form>
                        <div className='acceptBtn'>
                            <DelOk closedWindow={()=>this.setState({ isOpen: false})} />
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }
}