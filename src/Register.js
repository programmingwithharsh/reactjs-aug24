import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                username: "",
                password: "",
                email: ""
            }
        }
    }

    changeHandler = (event) => {
        let name = event.target.name; // username, password, email
        let value = event.target.value; // username value, password value, email value
        let errors = this.state.errors;

        console.log({ name });
        console.log({ value });
        console.log({ errors });

        switch (name) {
            case "username":
                errors.username = value.length < 5 ? "username must be 5 characters in length" : ""
                break;

            case "password":
                errors.password = value.length < 5 ? "password must be 5 characters in length" : ""
                break;

            case "email":
                errors.email = value.length < 5 ? "email must be 5 characters in length" : ""
                break;

            default:
                break;
        }
        this.setState({ errors, [name]: value }); // to update state
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Form is submitted");
    }

    render() {
        const { errors } = this.state;
        return (<>
            <h1>Register Class Component</h1>
            <form onSubmit={this.handleSubmit}>
                Enter Username: <input type="text" className='form-control' placeholder='Enter Username' name='username' onChange={this.changeHandler} />
                <p className="error">{errors.username}</p>
                Enter Password: <input type="text" className='form-control' placeholder='Enter Password' name='password' onChange={this.changeHandler} />
                <p className="error">{errors.password}</p>
                Enter Email: <input type="text" className='form-control' placeholder='Enter Email' name='email' onChange={this.changeHandler} />
                <p className="error">{errors.email}</p>
                <input className='btn btn-primary' type="submit" value="register" />
            </form>
        </>);
    }
}

export default Register;