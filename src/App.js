import { Route, Routes } from 'react-router-dom';
import './App.css';
import Erorr from './component/Erorr/Erorr';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='*' element={<Erorr></Erorr>}></Route>
      </Routes>
      </div>
        
        );
}

        export default App;
