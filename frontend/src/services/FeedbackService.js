import axios from 'axios'

const  USERS_REST_API_URL='http://localhost:8002/feedback';



class feedbackService{

    getUsers(){
    return axios.get(USERS_REST_API_URL);
    
}
}

export default new feedbackService();