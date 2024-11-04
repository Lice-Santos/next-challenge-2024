import Link from "next/link";
import { DivBanner } from "../styles";
import { BannerProps} from "../types";

export default function Banner({titulo, paragrafo, textoBotao}: BannerProps) {
    return (
        <DivBanner style={{ backgroundImage: "url('../image/principal.png')" }}>
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
            <Link href={"/diagnostico"}>
                <button>{textoBotao}</button>
            </Link>
            
        </DivBanner>
    )
}