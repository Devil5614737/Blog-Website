import Home from "./pages/Home";
import "./styles/global.css";
import {Route,Routes} from 'react-router-dom';
import Blogs from "./pages/Blogs";
import {Context} from './Context';
import { useState } from "react";

function App() {
  const[user,setUser]=useState(localStorage.getItem('username'));
  const[isAuth,setIsAuth]=useState(false)
  return (
    <Context.Provider value={{setUser,user,isAuth,setIsAuth}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
    </Routes>
    </Context.Provider>
 
  );
}

export default App;
