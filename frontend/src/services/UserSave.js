import axios from 'axios'

const  USERS_REST_API_URL='http://localhost:8001/Survey/user/save';


class PostService{

    postUsers(){
    return axios.post(USERS_REST_API_URL);
    
}
}

export default new PostService();
