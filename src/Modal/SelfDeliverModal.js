import React, {Fragment} from 'react'
import SelfDelOk from './SelfDelOk'
import './Modal.css'


export default class SelfDeliverModal extends React.Component{

    state = {
        isOpen: false
    };


    render() {
        return (
            <Fragment>
                <button className='modBtn' onClick={() => this.setState({isOpen: true})} > Самовывоз </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1 className='modHead' >Самовывоз</h1>
                        <form className='SelfDeliverForm'>
                          <h1 className="text">Кто будет забирать </h1> <br />
                            <input type='text' className='modInput' placeholder='ФИО' /><br />
                            <h1 className="text">Что будет забирать </h1> <br />
                            <input type='text' className='modInput' placeholder='{ItemName}' /><br />
                            <h1 className="text">Дата самовывоза</h1> <br />
                            <input type='text' className='modInput' placeholder='12 ноября 2020, 15:15' /><br />
                        </form>
                        <div className='acceptBtn'>
                        <SelfDelOk closedWindow={()=> this.setState({isOpen: false})} />
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }

}
