import { GetKonsulentParams, Konsulent } from "@/app/api/konsulenter/konsulent.types";
import KonsulentInfo from "../../components/konsulent-info/konsulent-info.component";
import { hentKonsulentSSR } from "../../utils/data-fetching/data-fetching-ssr";

const KonsulentPageSSR = async({ params }: GetKonsulentParams) => {
    const konsulent = await hentKonsulentSSR(params.id);
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