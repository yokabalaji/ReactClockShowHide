
import './App.css';
import {Component} from 'react';
import Clock from '../src/Components/Clock/Index.js'

class App extends Component{
state={ShowClock:false}

ontoggleBtn=()=>{
    this.setState(prevState=>{
    const {ShowClock}=prevState
    return({
    ShowClock:!ShowClock}
  )
  })
  }

  render(){
    const {ShowClock}=this.state
    return(
     
      <div className='container'>
        <div className='sub-Container'>
          <button type='button' className='btn' onClick={this.ontoggleBtn}>{ShowClock?'Hide clock':'Show Clock'}</button>
{ShowClock &&   <Clock />}
        </div>
      </div>
    )
  }
}

export default App;
