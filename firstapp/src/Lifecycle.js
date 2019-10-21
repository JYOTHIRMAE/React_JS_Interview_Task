import React, {Component} from 'react';
import './time.css';

export default class DynamicTime extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.updateTime(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    updateTime(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <div className="time">
                {/* <h1>This is Dynamic Time</h1> */}
                <h2> <div className="border">{this.state.date.toLocaleTimeString()}
                <button onClick={this.componentWillUnmount.bind(this)}>STOP</button></div></h2>
            </div>
        );
    }
}