import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

import Header from "./components/Header";

export default function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/Sobre" element={ <Sobre/> }/>
                <Route path="/Contato" element={ <Contato/> }/>
            </Routes>
        </BrowserRouter>
    )
}