import { useParams } from "react-router-dom"

export default function Produto() {

    const { id } = useParams()

    return(
        <div>
            <h3>Página do Produto</h3>

            <span>
                Meu produto é {id}
            </span>
        </div>
    )
}