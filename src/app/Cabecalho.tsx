import { HeaderCabecalho } from "./styles";
import { BannerProps } from "./types";
import Banner from "./components/Banner";
import Menu from "./components/Menu";


export default function Cabecalho({fundoUrl, titulo, paragrafo, textoBotao}: BannerProps) {

    return (
        <HeaderCabecalho>
            <Banner  fundoUrl={fundoUrl} titulo={titulo} paragrafo={paragrafo} textoBotao={textoBotao} irPara="/diagnostico"/>

        </HeaderCabecalho>
    )
}