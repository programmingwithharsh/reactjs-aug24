import React from 'react';
import Title from './Title';
import "./Welcome.css";

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
        let myStyle = {
            backgroundColor: "red",
            border: "2px solid green",
            color: "white"
        };

        return <>
            <div style={{ backgroundColor: "orange", border: "2px solid green" }}> welcome works!</div>
            <h1 style={myStyle}>React State - State is having, username is {this.state.username}</h1>
            <button className="btn btn-primary" onClick={this.updateUsername}>Update State Username</button>
            <h1 className='header'>React Props - Props is having, username is {this.props.usernameProps}</h1>
            <Title />
        </>
    }
}