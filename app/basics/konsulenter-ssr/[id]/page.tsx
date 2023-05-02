import { GetKonsulentParams, Konsulent } from "@/app/api/konsulenter/konsulent.types";
import { notFound } from "next/navigation";
import KonsulentInfo from "../../components/konsulent-info/konsulent-info.component";

const hentKonsulent = async(id: string): Promise<Konsulent> => {
    const resultat = await fetch(`http:0.0.0.0:3000/api/konsulenter/${id}`, {
        cache: 'no-store'
    })

    if (!resultat.ok) {
        return notFound();
    }

    return await resultat.json()
}

const KonsulentPageSSR = async({ params }: GetKonsulentParams) => {
    const konsulent = await hentKonsulent(params.id);
    return (
        <>
            {
                konsulent &&
                <KonsulentInfo {...konsulent} />
            }
        </>
    )
}

export default KonsulentPageSSR;