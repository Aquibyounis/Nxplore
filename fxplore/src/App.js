import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import AboutPage from '../src/Pages/AboutPage/AboutPage.jsx';
import Login from '../src/Pages/Login/Login.jsx';
import Signup from '../src/Pages/Signup/Signup.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
