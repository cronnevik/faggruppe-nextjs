import { Konsulent } from "@/app/api/konsulenter/konsulent.types";

const hentKonsulenter = async(): Promise<Konsulent[]> => {
    const resultat = await fetch('http:localhost:3000/api/konsulenter');
    return await resultat.json();
}

const KonsulenterSSR = async() => {
    const konsulenter = await hentKonsulenter();
    return (
        <>
            {
                konsulenter && konsulenter.map(konsulent => {
                    return (<p key={konsulent.id}> {konsulent.personalia.navn} </p>)
                })
            }
        </>
    )
}
export default KonsulenterSSR;