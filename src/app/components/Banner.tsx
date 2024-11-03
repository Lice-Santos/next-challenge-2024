import { DivBanner } from "../styles";
import { BannerProps, NavegarParaProps } from "../types";

export default function Banner({fundoUrl, titulo, paragrafo, textoBotao, irPara}: BannerProps&NavegarParaProps) {
    return (
        <DivBanner imagemFundo={fundoUrl}>
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
            <button>{textoBotao}</button>
        </DivBanner>
    )
}