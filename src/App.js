import { Route, Routes, Link, NavLink } from "react-router-dom";
import Blog from "./pages/blog";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import BlogLayout from "./pages/blog";
import Page404 from "./pages/404";
import Profile from "./pages/Profile";





function App() {
  return (
    <>
    <nav>
      <NavLink to=""  className={({isActive})=>isActive && 'aktif'}>Anasayfa </NavLink>
      <NavLink to="/contacts" style={({isActive})=>({
        backgroundColor: isActive ? 'red' : 'transparent'
      })}>İletişim</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/blog " element={<BlogLayout/>}>
        <Route index={true} element={<Blog/>}></Route>
        
      <Route path= "categories" element={<Categories/>} ></Route>
      <Route path="post/:url" element={<Post />}></Route>
      <Route  path="profile" element={<Profile/>}></Route>
      <Route path="*" element={<Page404/>}></Route>


      </Route>
      
    </Routes>
    
    
    </>
  );
}

export default App;
