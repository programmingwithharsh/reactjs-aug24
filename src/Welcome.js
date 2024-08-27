import React from 'react';
import Title from './Title';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Kunal"
        }
    }


    updateUsername = () => {
        this.setState({ // update state, whenever state update component rerender
            username: "Ashish"
        })
    }

    render() {
        return <>
            <div> welcome works!</div>
            <h1>React State - State is having, username is {this.state.username}</h1>
            <button className="btn btn-primary" onClick={this.updateUsername}>Update State Username</button>
            <h1>React Props - Props is having, username is {this.props.usernameProps}</h1>
            <Title />
        </>
    }
}