import React, {Fragment} from 'react'
import './Modal.css'




export default class DelOk extends React.Component {


    

    state = {
        isOpen: false,
    };
    
    
    

    render() {
        
        return (
            <Fragment>
                <button className='accept' onClick={() => this.setState({isOpen: true})} > OK </button>
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

