import React from 'react';
import './App.css';

function Encabezado() {
  return (
    <header className="header-box">
      <h1>Portal del Proyecto de Grado</h1>
      <p>Institución Educativa - Educación Media Technical</p>
    </header>
  );
}

function Presentacion() {
  return (
    <section className="card-box">
      <h2>Sistema de Monitoreo Ambiental Escolar</h2>
      <p><strong>Estado del Proyecto:</strong> Fase de Desarrollo y Prototipado</p>
      <p>
        Este proyecto surge como respuesta a la necesidad de controlar la temperatura y la calidad
        del aire en los espacios cerrados de nuestra institución, garantizando un entorno adecuado
        para el aprendizaje.
      </p>
    </section>
  );
}

function Objetivos() {
  return (
    <section className="card-box">
      <h3>Objetivo General</h3>
      <p>
        Diseñar e implementar un prototipo funcional de monitoreo ambiental basado en hardware libre
        y desarrollo web para la comunidad educativa.
      </p>
    </section>
  );
}

function Integrantes() {
  return (
    <section className="card-box">
      <h3>Equipo de Trabajo</h3>
      <p>Estudiante A: Desarrollador Front-end y Documentador</p>
      <p>Estudiante B: Técnico en Hardware y Gestión de Datos</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="main-container">
      <Encabezado />
      <main>
        <Presentacion />
        <Objetivos />
      <SolucionTecnica/>
        <Integrantes />
      </main>
      <footer className="footer-box">
        <p>2026 - Proyecto de Grado Undécimo</p>
      </footer>
    </div>
  );
}

function SolucionTecnica() {
  return (
    <section className="card-box">
      <h3>Solución Técnica</h3>
      <p>
        Para resolver este problema, implementaremos una red de sensores de temperatura y 
        humedad conectados a un microcontrolador con Wi-Fi, los cuales enviarán los datos 
        en tiempo real a este portal web para su visualización.
      </p>
      <ul>
        <li>Sensor de temperatura y humedad ambiental</li>
        <li>Microcontrolador con conectividad a red</li>
        <li>Interfaz web en React para lectura de datos</li>
      </ul>
    </section>
  );
}