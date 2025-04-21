import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Blog } from './pages/blog'
import { BlogId } from './pages/blogId'
import { Publish } from './pages/publish'
import { ToastContainer } from "react-toastify";
import { Home } from './pages/home'
 
function App() {
   return <div>
      <div>
        <ToastContainer/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/signin' element = {<Signin/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path='/blog/:id' element = {<BlogId/>}/>
          <Route path='/publish' element = {<Publish/>}/>
        </Routes>
      </BrowserRouter>
   </div>
}

export default App
