import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateArticle from './pages/CreateArticle.jsx';
import SavedArticle from './pages/SavedArticle.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/createArticle" element={<CreateArticle />} />
        <Route path="/savedArticle" element={<SavedArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
