import { GetKonsulentParams, Konsulent } from "@/app/api/konsulenter/konsulent.types";
import KonsulentInfo from "../../components/konsulent-info/konsulent-info.component";
import { hentAlleKonsulenterISR, hentKonsulentISR } from "../../utils/data-fetching/data-fetching.isr";
import type { Metadata } from "next";

export async function generateMetadata({ params: { id } }: GetKonsulentParams): Promise<Metadata> {
    const konsulentData: Promise<Konsulent> = hentKonsulentISR(id)
    const konsulent: Konsulent = await konsulentData

    if (!konsulent.personalia.navn) {
        return {
            title: "Konsulent ikke funnet"
        }
    }

    return {
        title: konsulent.personalia.navn,
        description: `Side for ${konsulent.personalia.navn}`
    }

}

const KonsulentPageISR = async({ params }: GetKonsulentParams) => {
    const konsulent = await hentKonsulentISR(params.id);
    return (
        <>
            {
                konsulent &&
                <KonsulentInfo {...konsulent} />
            }
        </>
    )
}
export default KonsulentPageISR;

/**
 *  The generateStaticParams function can be used 
 *  to statically generate routes at build time instead of on-demand at request time.
 *  https://beta.nextjs.org/docs/api-reference/generate-static-params
 */
export async function generateStaticParams() {
    const konsulentData: Promise<Konsulent[]> = hentAlleKonsulenterISR();
    const konsulenter = await konsulentData;

    return konsulenter.map(konsulent => ({
        id: konsulent.id
    }));
}