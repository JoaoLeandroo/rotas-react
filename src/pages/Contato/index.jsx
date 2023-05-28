import { Link } from "react-router-dom";

export default function Contato() {
    return(
        <div>
            <h2>AQUI É MINHA AREA DE CONTATO</h2>
            <span>TELEFONE: (XX) X-XXXX-XXXX</span><br/>
            <Link to="/">Pagina Principal</Link><br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}