


export default function CabecalhoEquipe({fundoUrl, titulo, paragrafo, textoBotao}: BannerProps) {

    return (
        <HeaderCabecalho>
            <Banner fundoUrl={fundoUrl} titulo={titulo} paragrafo={paragrafo} textoBotao={textoBotao}/>

        </HeaderCabecalho>
    )
}