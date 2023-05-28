import { Link } from "react-router-dom"

export default function Erro() {
    return(
        <div>
            <h2>Ops! Página não encontrada.</h2> <br/>

            <span>Retorne a pagina Principal:</span> <br/>
            <Link to="/">HOME</Link>
        </div>
    )
}