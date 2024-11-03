import { DivBanner } from "../styles";
import { BannerProps, NavegarParaProps } from "../types";

export default function Banner({fundoUrl, titulo, paragrafo, textoBotao}: BannerProps&NavegarParaProps) {
    return (
        <DivBanner imagemFundo={fundoUrl} style={{ backgroundImage: "url('../image/fundo_principal.png')" }}>
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
            <button>{textoBotao}</button>
        </DivBanner>
    )
}