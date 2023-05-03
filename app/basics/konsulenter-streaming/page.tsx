import type { Metadata } from "next"
import { hentAlleKonsulenterStreaming } from "../utils/data-fetching/data-fetching-streaming";
import Link from "next/link";
import KonsulentListe from "../components/konsulent-liste/konsulent-liste.component";

export const metadata: Metadata = {
    title: 'Konsulenter-Streaming',
}

const KonsulenterStreaming = async() => {
    const konsulenter = await hentAlleKonsulenterStreaming();

    const renderKonsulenter = () => {
        if (konsulenter && konsulenter.length > 0) {
            return(
                <KonsulentListe konsulenter={konsulenter} /> 
            )
        }
    }

    return (
        <div className="container">
            <h3>Streaming</h3>
            {renderKonsulenter()}
        </div>
    )
}
export default KonsulenterStreaming;