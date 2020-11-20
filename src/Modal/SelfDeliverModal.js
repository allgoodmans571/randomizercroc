import React, {Fragment} from 'react'
import './Modal.css'

export default class SelfDeliverModal extends React.Component{

    state = {
        isOpen: false
    };


    render() {
        return (
            <Fragment>
                <button className='modBtn' onClick={() => this.setState({isOpen: true})} > Доставка </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <form className='SelfDeliverForm'>
                          <h1 className="text">Кому доставить </h1> <br />
                            <input type='text' className='modInput' /><br />
                            <h1 className="text">Что доставить </h1> <br />
                            <input type='text' className='modInput' /><br />
                            <h1 className="text">Дата доставки</h1> <br />
                            <input type='text' className='modInput' /><br />
                            <h1 className="text">Куда доставить</h1> <br />
                            <input type='text' className='modInput' /><br />
                            <h1 className="text">Куда звонить</h1> <br />
                            <input type='text' className='modInput' /><br />
                        </form>
                        <div className='acceptBtn'>
                        <button className='accept' onClick={() => this.setState({isOpen: false})}>Принять</button>
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }

}