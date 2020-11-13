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
                            <input type='text' className='modInput' /><br />
                            <h1>TextTextText</h1> <br />
                            <input type='text' className='modInput' /><br />
                            <h1>TextTextText</h1> <br />
                            <input type='text' className='modInput' /><br />
                            <h1>TextTextText</h1> <br />
                            <input type='text' className='modInput' /><br />
                        </form>
                        <button className='btn' onClick={() => this.setState({isOpen: false})}>Принять</button>
                    </div>
                </div>}
            </Fragment>
        )
    }

}