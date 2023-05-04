import { hentAlleKonsulenterISR } from "../utils/data-fetching/data-fetching.isr";
import type { Metadata } from "next";
import KonsulentListe from "../components/konsulent-liste/konsulent-liste.component";

export const metadata: Metadata = {
    title: 'Konsulenter-ISR',
}

const KonsulenterISR = async() => {
    const konsulenter = await hentAlleKonsulenterISR();

    const renderKonsulenter = () => {
        if (konsulenter && konsulenter.length > 0) {
            return(
                <KonsulentListe konsulenter={konsulenter} itemLink="/basics/konsulenter-isr" /> 
            )
        }
    }
    return (
        <div className="container">
            <h3>Incremental Static Regeneration (ISR)</h3>
            {renderKonsulenter()}
        </div>
    )
}
export default KonsulenterISR;