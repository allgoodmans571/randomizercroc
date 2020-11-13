import React, {Fragment} from 'react'
import './Modal.css'

export default class DeliverModal extends React.Component{

    state = {
        isOpen: false
    };


    render() {
        return (
            <Fragment>
                <button className='modBtn' onClick={() => this.setState({isOpen: true})} > Самовывоз </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1>Modal title</h1>
                        <p>I am awesome modal!</p>
                        <button className='btn' onClick={() => this.setState({isOpen: false})}>Close modal</button>
                    </div>
                </div>}
            </Fragment>


        )
    }

}