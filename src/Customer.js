import { useState } from "react";

function Customer() {
    const [customers, setCustomers] = useState([]); // useState hook, users is empty array, and setUsers we use to update users

    return (<>
        <h1>Add Customer</h1>
        <div className="card">
            <div className="card-header">
                Sign Up!
            </div>
            <div className="card-body">
                <form noValidate>
                    <div className="form-group row mb-2">
                        <div className="col-xxl-2">
                            <label>First Name</label>
                        </div>
                        <div className="col-xxl-8">
                            <input className="form-control" type="text" placeholder="First Name (required)" />
                        </div>
                    </div>

                    <div className="form-group row mb-2">
                        <div className="col-xxl-2">
                            <label>Last Name</label>
                        </div>
                        <div className="col-xxl-8">
                            <input className="form-control" type="text" placeholder="Last Name (required)" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="offset-xxl-2 col-xxl-4 mt-2">
                            <button className="btn btn-primary" type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <h1>Customer List</h1>
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.name}</td>
                                <td>{customer.age}</td>
                                <td>{customer.address}</td>
                            </tr >
                        ))
                    }
                </tbody >
            </table>
        </div>
    </>);
}

export default Customer;