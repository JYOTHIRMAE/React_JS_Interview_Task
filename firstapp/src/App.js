import React, { Component } from 'react'

import Scroll from './Jason-ScrollTask/Scroll'
import Hoc from './Jason-ScrollTask/Hoc'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Scroll />
               
            </div>
        )
    }
}
App = Hoc(App)
export default App


