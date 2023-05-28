import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

import Header from "./components/Header";
import Erro from "./pages/Erro";

export default function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/Sobre" element={ <Sobre/> }/>
                <Route path="/Contato" element={ <Contato/> }/>

                //o * encaminha para a pagina de erro
                <Route path="*" element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    )
}