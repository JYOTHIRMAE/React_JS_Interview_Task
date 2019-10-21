
//import React, { Component } from 'react'


/*export default function CoinTable(props){
    return(
       <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Brand</th>
                    <th>Revenue</th>
                    <th>Average Selling Price Per Unit</th>

                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.Brand}</td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}*/
import React, { Component } from 'react'
import postData from '../data/posts.json'

class PostList extends Component {
    render() {
        return (
            <div>
                <h1>Hello There</h1>
                {postData.map((postDetail, index) => {
                    return <div>
                        <table>

                            <tr>
                                <td>{postDetail.id}</td>
                                <td>{postDetail.title}</td>
                                <td>{postDetail.content}</td>
                                <td>{postDetail.slug}</td>
                            </tr>
                        </table>
                    </div>
                })}
            </div>
        )
    }
}
export default PostList
