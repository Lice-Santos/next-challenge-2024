import Image from "next/image"
import { DivAreaSelecao } from "./styles"
import { AreaSelecaoProps } from "./types"

export default function AreaSelecao1({inicioConteudo, finalConteudo, conteudoMarcado, textoBotao} : AreaSelecaoProps){

    return(
        <DivAreaSelecao>
            <div className="lado1">
                <div className="linha">
                    <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong></h3>
                    <p>{finalConteudo}</p>
                </div>
                <button>{textoBotao}</button>
            </div>
            <Image src={"../public/image/mecanicoInicial.png"} height={300} width={100} alt="texto de funcionalidade" />
        </DivAreaSelecao>
    )
}