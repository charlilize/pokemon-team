import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import CreatePokemon from './components/CreatePokemon.jsx';
import Gallery from "./components/Gallery.jsx";
import EditPokemon from './components/EditPokemon.jsx';
import DetailView from './components/DetailView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index={true} path="/" element={<App/>} />
          <Route index={false} path="/create" element={<CreatePokemon />} />
          <Route index={false} path="/gallery" element={<Gallery/>} />
          <Route index={false} path="/gallery/:id" element={<DetailView/>} />\
        </Route> 
    </Routes>
  </BrowserRouter>
)
