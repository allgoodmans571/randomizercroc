import React, {Fragment, useState} from 'react'
import './Modal.css'

export default class SelfDeliverModal extends React.Component{

    state = {
        isOpen: false
    };


    render() {
        return (
            <Fragment>
                <button className='btn' onClick={() => this.setState({isOpen: true})} > Доставка </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1>Modal title</h1>
                        <p>I am awesome modal!</p>
                        <button>Close modal</button>
                    </div>
                </div>}
            </Fragment>


        )
    }

}