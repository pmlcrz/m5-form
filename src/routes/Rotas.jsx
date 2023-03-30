import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Produtos from '../pages/Produtos/Produtos'
import CriarProdutos from '../pages/Produtos/CriarProdutos'


function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/criarprodutos" element={<CriarProdutos />} />
            
            
            
        </Routes>
    )
}

export default Rotas