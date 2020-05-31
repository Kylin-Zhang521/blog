import React, { Component } from 'react'
import Axios from 'axios'

export default class Home extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <div>
                <ul>
                {
                    this.state.list.map((item,index)=>
                        <li key={item.id}>
                            {item.nm}
                        </li>    
                        )
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        Axios.get("http://localhost:8000/coming").then(res=>{
            console.log(res.data)
            this.setState({
                list: res.data
            })
        })
    }
    
}
