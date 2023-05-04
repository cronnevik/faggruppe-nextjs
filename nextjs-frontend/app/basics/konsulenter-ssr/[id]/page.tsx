import { GetKonsulentParams } from "../../types/konsulent.types";
import KonsulentInfo from "../../components/konsulent-info/konsulent-info.component";
import { hentKonsulentSSR } from "../../utils/data-fetching/data-fetching-ssr";

const KonsulentPageSSR = async({ params }: GetKonsulentParams) => {
    const konsulent = await hentKonsulentSSR(params.id);
    return (
        <>
            <KonsulentInfo {...konsulent} />
        </>
    )
}

export default KonsulentPageSSR;