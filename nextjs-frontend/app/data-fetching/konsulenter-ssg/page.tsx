import Link from "next/link";
import { hentAlleKonsulenterSSG } from "../utils/data-fetching/data-fetching-ssg";
import type { Metadata } from "next";
import KonsulentListe from "../components/konsulent-cards/konsulent-cards.component";

export const metadata: Metadata = {
    title: 'Konsulenter-SSG',
}

const KonsulenterSSG = async() => {
    const konsulenter = await hentAlleKonsulenterSSG();

    const renderKonsulenter = () => {
        if (konsulenter && konsulenter.length > 0) {
            return(
                <KonsulentListe konsulenter={konsulenter} itemLink="/basics/konsulenter-ssg" /> 
            )
        }
    }
    return (
        <div className="container">
            <h3>Static Site Generation (SSG)</h3>
            {renderKonsulenter()}
        </div>
    )
}
export default KonsulenterSSG;