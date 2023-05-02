import { Konsulent } from "@/app/api/konsulenter/konsulent.types";

const KonsulentInfo = (kosulent: Konsulent) => {
    return (
        <>
            <h4>Konsulent Info</h4>
            <p>
                { kosulent.personalia.navn }
            </p>
        </>
    )
}
export default KonsulentInfo;