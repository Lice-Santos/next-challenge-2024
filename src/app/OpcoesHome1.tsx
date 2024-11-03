
import Link from "next/link"
import { OpcoesPrincipalProps } from "./types"
import Image from "next/image"

export default function OpcoesHome1({logo1, logo2, logo3}: OpcoesPrincipalProps){

    return(
        <div>
        {/*<DivOpcoes1> */}
            <h2>Trilhando um caminho mais <span>seguro</span></h2>
            <div className="container">    
                <div id="diagnostico" className="itemOpcao">
                <Link href={'/diagnostico'}></Link>
                    <Image width={500} height={300} src={logo2} alt="diagnóstico automotivo"/>
                    <h3>REVISÃO</h3>
                    <p>Revise seu veículo para identificar problemas</p>
                </div>
                <div id="revisao" className="itemOpcao">
                <Link href={'/revisao'}></Link>
                    <Image width={500} height={300} src={logo1} alt="revisão assistida"/>
                    <h3>DIAGNÓSTICO</h3>
                    <p>Descubra o problema do seu veículo</p>
                </div>
                <div id="historico" className="itemOpcao" >
                <Link href={'/historico'}></Link>
                    <Image width={500} height={300} src={logo3} alt="historico" />
                    <h3>HISTÓRICO</h3>
                    <p>Veja suas revisões e diagnósticos anteriores</p>

                </div>
            </div>
            
        {/* </DivOpcoes1> */}
        </div>
    )
}