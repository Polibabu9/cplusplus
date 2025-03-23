import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Tutorial from "./components/Subfolders/Turtorial/Tutorial";
import Reference from "./components/Subfolders/References/Reference";
import Article from "./components/Subfolders/Articles/Article";
import Home from "./components/Home/Home";
import Login from "./components/Subfolders/Login/Login";
import Footer from "./components/Footer/Footer";
import './App.css'
import Forum from "./components/Subfolders/Forum/Forum";

function App() {
  return (
    <Router>
      <Nav/>
      <div className="main-content">
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home/>} />
          <Route path="/tutorials" element={<Tutorial/>} />
          <Route path="/references" element={<Reference/>} />
          <Route path="/articles" element={<Article/>} />
          <Route path="/forum" element={<Forum/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App