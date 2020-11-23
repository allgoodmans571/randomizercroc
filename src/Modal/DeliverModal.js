import React, {Fragment} from 'react'
import './Modal.css'
import DelOk from "./DelOk";

export default class DeliverModal extends React.Component{

    state = {
        isOpen: false
    };


    stateFalse() {
        this.setState({ isOpen: false})
    }


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
                            <input type='text' className='modInput' placeholder='12 ноября 2020, 15:15' /><br />
                            <h1 className="text">Куда доставить</h1> <br />
                            <input type='text' className='modInput' placeholder='Адрес' /><br />
                            <h1 className="text">Куда звонить</h1> <br />
                            <input type='text' className='modInput' placeholder='+7'/><br />
                        </form>
                        <div className='acceptBtn'>
                        <button className='accept' onClick={() => this.setState({isOpen: false})}>Принять</button>
                            <DelOk/>
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }

}