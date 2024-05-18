import './App.css';
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/inicio/Inicio";
import Perfil from "./components/perfil/Perfil";
import Contacto from "./components/contacto/Contacto";
import Ayuda from "./components/ayuda/Ayuda";
import Estudios from "./components/estudios/Estudios";
import Trabajos from "./components/trabajos/Trabajos";
import Zona_gamer from "./components/zona_gamer/Zona_gamer";

export default function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/trabajos" element={<Trabajos />} />
        <Route path="/zona_gamer" element={<Zona_gamer />} />
      </Routes>
    </div>
  );
}
