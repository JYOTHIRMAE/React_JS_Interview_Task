import React, { Component } from 'react'


//Here HOC is a Higher Order Component , so Taking Scroll as an input and displaying data
export default function Hoc(Scroll)
{
    return class extends Component{
        render()
        {
            return(
                    <div>
                        <Scroll/>
                    </div>
                  )
                }
        }
}