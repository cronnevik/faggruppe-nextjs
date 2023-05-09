import Link from "next/link";
import { hentAlleKonsulenterSSR } from "../utils/data-fetching/data-fetching-ssr";
import type { Metadata } from "next";
import KonsulentListe from "../components/konsulent-cards/konsulent-cards.component";

export const metadata: Metadata = {
    title: 'Konsulenter-SSR',
}

const KonsulenterSSR = async() => {
    const konsulenter = await hentAlleKonsulenterSSR();

    const renderKonsulenter = () => {
        if (konsulenter && konsulenter.length > 0) {
            return(
                <KonsulentListe konsulenter={konsulenter} itemLink="/basics/konsulenter-ssr" /> 
            )
        }
    }

    return (
        <div className="container">
            <h3>Server-side Rendering (SSR)</h3>
            {renderKonsulenter()}
        </div>
    )
}
export default KonsulenterSSR;