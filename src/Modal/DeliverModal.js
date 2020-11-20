import React, {Fragment} from 'react'
import './Modal.css'

export default class DeliverModal extends React.Component{

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
                          <h1 className="text">Кто будет забирать </h1> <br />
                            <input type='text' className='modInput' /><br />
                            <h1 className="text">Что будет забирать </h1> <br />
                            <input type='text' className='modInput' /><br />
                            <h1 className="text">Дата самовывоза</h1> <br />
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