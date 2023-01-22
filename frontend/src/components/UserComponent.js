import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{

constructor(props){
    super(props)
    this.state={
        users:[]
    }
}

componentDidMount(){
    UserService.getUsers().then((response)=>{
        this.setState({ users:response.data})
    });
}
render(){
    return(
        <div>
            <h1 className="text-center"> User Details</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td> First Name</td>
                        <td> Last Name </td>
                        <td> email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user=>
                            <tr key={user.firstName}>
                                <td> {user.firstName}</td>
                                <td> {user.lastName}</td>
                                <td> {user.email}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
}
export default UserComponent