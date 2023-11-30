import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import UserContext from './UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import Home from './components/Home';
import UpdateUser from './components/UpdateUser';
import EmployForm from './components/EmployForm';
import Busqueda from './components/Busqueda';
import Contact from './components/Contacto';
import Solicitudes from './components/Solicitudes';
import Comentarios from './components/Comentarios';

function App() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser, error, setError }}>
      <BrowserRouter>
        <header className="pb-24">
          <Header />
        </header>
        <main className="ml-16 mr-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/busqueda" element={<Busqueda />} />
            <Route path="/config" element={<UpdateUser />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/employ-form" element={<EmployForm />} />
            <Route path='/solicitudes' element={<Solicitudes />} />
            <Route path='/comentarios' element={<Comentarios />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
