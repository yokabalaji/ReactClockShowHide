import { Component } from "react";
import './Index.css'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state={date: new Date()}
    }
componentDidMount(){
    const timer=setInterval(this.tick,1000)
}
componentWillUnmount(){
    clearInterval(this.timer)
}
tick=()=>{
    this.setState({date:new Date})
}

    render(){
        const {date}=this.state
        return(
            <div className="clock-Container">
                <h1 className="heading">CLOCK</h1>
                <p className="clock">{date.toLocaleTimeString()}</p>
            </div>

        )
    }
}
export default Clock