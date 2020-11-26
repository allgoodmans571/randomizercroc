import React, {Fragment} from 'react'
import './Modal.css'




export default class DelOk extends React.Component {




    state = {
        isOpen: false,
    };
    
    
    

    render() {
        
        return (
            <Fragment>
                <button className='accept' onClick={() => {this.setState({isOpen: true})}} > OK </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1 className='modHead' >Покупка в Боброшопе</h1>
                        <h2 style = {{marginTop:'9rem'}}>Привет!</h2>
                        <h2 style = {{color: '#00A460'}}>Ты получил приз! <br /> Ожидай письмо о дате доставки. </h2>
                        <div className='acceptBtn'>
                        <button className='accept' onClick={() => {
                            console.log(12345);
                            window.location.assign('https://bobromania.croc.ru/');
                            this.props.closedWindow()
                            this.setState({isOpen: false})}

                        } >Перейти в Боброманию</button>
                        </div>
                        <div><p style = {{opacity: '50%',width : '100%', marginTop: '8rem' }}>По вопросам пиши на рассылку bobriksbank@croc.ru</p></div>
                    </div>
                </div>}
            </Fragment>
        )
    }

}

