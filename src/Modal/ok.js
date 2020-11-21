import React, {Fragment} from 'react'
import './Modal.css'

export default class okModal extends React.Component {

    state = {
        isOpen: true,
    };




    render() {
        return (
            <Fragment>
                <button className='modBtn' onClick={() => this.setState({isOpen: true})} > Самовывоз </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1 className='modHead' >Покупка в Боброшопе</h1>
                        <h2>Привет!</h2>
                        <h2>Ты получил приз! <br /> Ожидай письмо о дате доставки. </h2>
                        <div className='acceptBtn'>
                        <button className='accept' onClick={() => this.setState({isOpen: false})}>Принять</button>
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }

}

