import { Konsulent } from "../../types/konsulent.types";

const KonsulentInfo = (kosulent: Konsulent) => {
    return (
        <>
            <h4>Konsulent Info</h4>
            <div>
                { kosulent.personalia.navn }
            </div>
        </>
    )
}
export default KonsulentInfo;