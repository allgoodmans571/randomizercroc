import React, {Fragment} from 'react'
import './Modal.css'




export default class DelOk extends React.Component {


    

    state = {
        isOpen: false,
    };
    
    
    

    render() {
        
        return (
            <Fragment>
                <button className='accept' onClick={() => {this.props.send_data(); this.setState({isOpen: true})}} > OK </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1 className='modHead' >Покупка в Боброшопе</h1>          
                        <h2 style = {{marginTop:'3rem'}}>Привет!</h2>
                        {!this.props.Is_dodo && <h2 style = {{color: '#00A460',}}>Забрать можно по понедельникам <br />и четвергам с 14:00 до 18:00 в комнате 404 </h2>}
                        {this.props.Is_dodo && <h2 style = {{color: '#00A460',}}>Ожидай свой промокод на почте в течение дня </h2>}
                       <div className='acceptBtn'>
                        <button className='accept' onClick={() => {
                            this.props.closedWindow()
                            setTimeout(() => {
                                window.location.assign('https://bobromania.croc.ru/');
                                this.setState({isOpen: false})
                            }, 500)
                        } }>Перейти в Боброманию</button>
                        </div>
                        <div><p style = {{ opacity: '50%', width : '100%', marginTop: '3rem' }}>По вопросам пиши на рассылку bobriksbank@croc.ru</p></div>
                    </div>
                </div>}
            </Fragment>
        )
    }

}

