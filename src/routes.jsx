import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Produto from "./pages/Produto";

import Erro from "./pages/Erro";

export default function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/Sobre" element={ <Sobre/> }/>
                <Route path="/Contato" element={ <Contato/> }/>

                //uso do id para reconhecer o produto
                <Route path="/Produto/:id" element={ <Produto/> }/>


                //o * encaminha para a pagina de erro, sempre deixar o erro no final
                <Route path="*" element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    )
}