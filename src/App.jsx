import { useState, useContext } from 'react'
import Index from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Requisitos from './pages/Requisitos'
import Resumen from './pages/Resumen'
import FormularioFinal from './pages/FormularioFinal'
import Agradecimiento from './pages/Agradecimiento'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListaContainer from './components/Contenedores/ItemListaContainer'
import CartContext from './context/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Routes>
                <Route exact path='/' element={<Index />} />
                <Route exact path='/cotizador' element={<ItemListaContainer />} />
                <Route exact path='/resumen' element={<Resumen />} />
                <Route exact path='/formulariofinal' element={<FormularioFinal />} />
                <Route exact path='/agradecimiento' element={<Agradecimiento />} />
                <Route exact path='/requisitos' element={<Requisitos />} />
            </ Routes>
        </CartContext>
      </BrowserRouter>
    </>
  )
}

export default App
