"use client"

import Cabecalho from "./Cabecalho";
import Rodape from "./components/Rodape";
// import {MainPags } from "../../styles";
import AreaSelecao4 from "./AreaSelecao4";
import AreaSelecao1 from "./AreaSelecao1";
import AreaSelecao2 from "./AreaSelecao2";
import AreaSelecao3 from "./AreaSelecao3";
import OpcoesHome1 from "./OpcoesHome1";
import AreaSelecao5 from "./AreaSelecao5";


export default function Home() {
    
    return (
        <>
            <Cabecalho fundoUrl="/principal.png" titulo="DIAGNÓSTICO" paragrafo="Descubra o problema do seu veículo" textoBotao="INICIAR DIAGNOSTICO"/>
            <main>
            <OpcoesHome1 logo1="/image/diagnostico.png" logo2="/image/revisao.png" logo3="/image/historico.png"></OpcoesHome1>
            <AreaSelecao1 imagem="/image/mecanicoInicial.png" inicioConteudo="Aqui na " conteudoMarcado="TRIA" finalConteudo="Te ajudar é a nossa maior satisfação."  textoBotao="SAIBA MAIS SOBRE NÓS" irPara="/"/>      
            <AreaSelecao2 imagem="/image/pranchetaAzul.png" inicioConteudo="NO " conteudoMarcado="DIAGNÓSTICO " finalConteudo="você descobre os problemas do seu veículo respondendo a algumas perguntas!" textoBotao= "" irPara="/diagnostico"/>
            <AreaSelecao3 imagem="/image/revisaoInicial.png" texto="Descubra potenciais problemas fazendo a REVISÃO do seu automóvel"></AreaSelecao3>
            <AreaSelecao4 imagem="/image/acharOficina.png" texto="Encontre as oficinas mais próximas de você!" textoBotao = "BUSCAR OFICINAS"></AreaSelecao4>
            <AreaSelecao5 imagem="/image/historicoInicial.png" texto="Veja as revisões e diagnósticos feitos anteriormente!" textoBotao="VER HISTÓRICO" titulo="HISTÓRICO"></AreaSelecao5>
            <Rodape></Rodape>
            
            </main>
        </>
    )
}