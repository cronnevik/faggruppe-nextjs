import { Konsulent } from "@/app/api/konsulenter/konsulent.types"
import Link from "next/link"

interface KonsulentListeProps {
    konsulenter: Konsulent[]
    itemLink?: string
}

const KonsulentListe = ({konsulenter, itemLink}: KonsulentListeProps) => {
    const renderLink = (konsulent: Konsulent) => {
        if (itemLink !== undefined) {
            return(<Link href={`${itemLink}/${konsulent.id}`}>{konsulent.personalia.navn}</Link>)
        } else {
            return (<>{konsulent.personalia.navn}</>)
        }
    }

    return(
        <ul className="collection">
            {
                konsulenter.map(konsulent => {
                    return (
                        <li className="collection-item" key={konsulent.id}>
                            {renderLink(konsulent)}
                        </li>
                    )
                }) 
            }
        </ul>
    )
}

export default KonsulentListe; 