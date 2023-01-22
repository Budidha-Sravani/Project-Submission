import React from 'react';
import FeedbackService from '../services/FeedbackService';

class FeedbackComponent extends React.Component{

constructor(props){
    super(props)
    this.state={
        users:[]
    }
}

componentDidMount(){
    FeedbackService.getUsers().then((response)=>{
        this.setState({ users:response.data})
    });
}
render(){
    return(
        <div>
            <h1 className="text-center"> Feedback Details</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td> Comments</td>
                        <td> Rating</td>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user=>
                            <tr key={user.comments}>
                                <td> {user.comments}</td>
                                <td> {user.rating}</td>

                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
}
export default FeedbackComponent