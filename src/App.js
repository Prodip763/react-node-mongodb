import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>

      </Routes>
    </div>
  );
}

export default App;
