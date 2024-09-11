import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Registr  from "./components/Register";
import Post from "./components/Post"
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import AddComment from "./components/AddComment"

const App = () =>{
return(
  <Router> <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/registr" element ={<Registr/>}/>
    <Route path ="/post" element ={<Post/>}/>
    <Route path ="/posts/:id" element ={<PostList/>}/>
    <Route path ="/posts/add" element ={<AddPost/>}/>
    <Route path ="/post/:id/comments/add" element ={<AddComment/>}/>

  </Routes>
  </Router>
)
}
export default App
