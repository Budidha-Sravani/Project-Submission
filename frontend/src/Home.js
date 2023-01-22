import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import'./App.css';

function Home(){
    
    return(
        <>
        <ul id="horizontal-list">
        <li> <Link to="/userComponent"> UserComponent </Link> </li>
        <li> <Link to="/feedbackComponent"> feedbackComponent </Link> </li>
        
        </ul>
        </>
    )
}
export default Home;