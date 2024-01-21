import React from "react"

export default class UserClass extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            count: 0,
            count2: 0
        }

    }

    render() {
        const { name, location } = this.props
        const { count } = this.state

        return <div className="user-card">
            <h1>count = {count}</h1>
            <button onClick={() => {
                this.setState({
                    count : this.state.count + 1
                })
            }}>Count +</button>
            <h2>Name:{name}</h2>
            <h3>Location :{location}</h3>
            <h4>Contact: @qweasd</h4>
        </div>
    }
}