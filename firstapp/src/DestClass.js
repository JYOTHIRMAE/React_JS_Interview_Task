import React, { Component } from 'react'

export class DestClass extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
             
    //     }
    // }
    
    render() {
       //const {hai,person} = this.state
        const {title,destructure} = this.props
        
        return (
            <div>
                <h1>{title} {destructure}</h1>
                {/* <h1>{hai} {person}</h1> */}
            </div>
        );
    }
}

export default DestClass;
