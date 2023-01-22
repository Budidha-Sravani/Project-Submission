import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import FeedbackComponent from './components/FeedbackComponent';
import Home from './Home';
import LoginWithLocalStorage from './components/LoginWithLocalStorage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LoginWithLocalStorage/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/userComponent" element={<UserComponent/>}></Route>
          <Route path="/feedbackComponent" element={<FeedbackComponent/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
