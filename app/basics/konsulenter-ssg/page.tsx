import Link from "next/link";
import hentKonsulenter from "../utils/henKonsulenter";

const KonsulenterSSG = async() => {
    const konsulenter = await hentKonsulenter();

    const renderKonsulenter = () => {
        if (konsulenter && konsulenter.length > 0) {
            return(
                <ul className="collection">
                    {
                        konsulenter.map(konsulent => {
                            return (
                                <li className="collection-item" key={konsulent.id}>
                                    <Link href={`/basics/konsulenter-ssg/${konsulent.id}`} >{konsulent.personalia.navn}</Link>
                                </li>
                            )
                        }) 
                    }
                </ul>
            )
        }
    }
    return (
        <div className="container">
            <h3>Static Generation (SSG)</h3>
            {renderKonsulenter()}
        </div>
    )
}
export default KonsulenterSSG;