import {} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registr  from "./pages/Register";
import Post from "./pages/Post"
import PostList from "./pages/PostList";
import AddPost from "./pages/AddPost";
import AddComment from "./pages/AddComment";

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
