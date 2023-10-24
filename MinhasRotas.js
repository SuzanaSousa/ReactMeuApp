import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Relogio from './Relogio/src/Relogio';
import Letreiro from './Letreiro/src/Letreiro';

export default function MinhasRotas() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Atividade01" element={<Relogio />} />
                <Route path="/Atividade02" element={<Letreiro />} />
            </Routes>
        </BrowserRouter>
    );
}





