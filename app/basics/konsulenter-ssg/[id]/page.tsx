import { GetKonsulentParams, Konsulent } from "@/app/api/konsulenter/konsulent.types";
import KonsulentInfo from "../../components/konsulent-info/konsulent-info.component";
import { hentAlleKonsulenterSSG, hentKonsulentSSG } from "../../utils/data-fetching/data-fetching-ssg";
import type { Metadata } from "next";

export async function generateMetadata({ params: { id } }: GetKonsulentParams): Promise<Metadata> {
    const konsulentData: Promise<Konsulent> = hentKonsulentSSG(id)
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

const KonsulentPageSSG = async({ params }: GetKonsulentParams) => {
    const konsulent = await hentKonsulentSSG(params.id);
    return (
        <>
            {
                konsulent &&
                <KonsulentInfo {...konsulent} />
            }
        </>
    )
}
export default KonsulentPageSSG;

/**
 *  The generateStaticParams function can be used 
 *  to statically generate routes at build time instead of on-demand at request time.
 *  https://beta.nextjs.org/docs/api-reference/generate-static-params
 */
export async function generateStaticParams() {
    const konsulentData: Promise<Konsulent[]> = hentAlleKonsulenterSSG();
    const konsulenter = await konsulentData;

    return konsulenter.map(konsulent => ({
        id: konsulent.id
    }));
}