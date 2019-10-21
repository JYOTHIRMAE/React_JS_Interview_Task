import React, {Component} from 'react';


class Time extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    render(){
        return(
            <div>
                <h1>This is time </h1>
                <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Time