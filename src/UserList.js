import { useState } from "react";

export default function UsersList(props) {

    const [users, setUsers] = useState([]); // useState hook, users is empty array, and setUsers we use to update users
    /*
        Class component 
            this.state 
            this.setState({})
        
        Functional Component 
            useState

            users is like this.state
            setUsers is like this.setState({})
    */

    return <div className="table-responsive">
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr >
                    ))
                }
            </tbody >
        </table >
    </div>
}

