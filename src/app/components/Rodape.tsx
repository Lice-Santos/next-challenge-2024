import { FooterRodape } from "../styles";
import fiap from "../image/fiap.png"
import porto from "../image/porto.png"
import oxigenio from "../image/oxigenio.png"
import ajuda from "../image/duvida.png"
import Image from "next/image";
import Link from "next/link";


export default function Rodape() {

    return (
        <FooterRodape>
            <div className="parcerias">
                <Image src={fiap} alt="" width={200}></Image>
                <Image src={porto} alt="" width={200}></Image>
                <Image src={oxigenio} alt="" width={200}></Image>
            </div>
            <p>triaduvidas@gmail.com</p>
            <div className="ajuda">
                <Link href={"/ajuda"}><Image src={ajuda} alt="" width={200}/></Link>
                <p>Ajuda</p>
            </div>
        </FooterRodape>
    )
}