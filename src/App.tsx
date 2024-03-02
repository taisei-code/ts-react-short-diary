import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header'
import Footer from './components/Footer'
import Create from "./pages/Create";
import Login from "./pages/Login";
import NotFound from './pages/NotFound';
import { auth } from './lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const [user] = useAuthState(auth)
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/create" element={user ? <Create/> : <Navigate to="/login" /> } />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App


