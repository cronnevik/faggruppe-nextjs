import Link from "next/link"
import { Konsulent } from "../../types/konsulent.types"
import Image from "next/image"

interface KonsulentCardsProps {
    konsulenter: Konsulent[]
    itemLink?: string
}

const KonsulentCards = ({konsulenter, itemLink}: KonsulentCardsProps) => {
    const renderLink = (konsulent: Konsulent) => {
        if (itemLink !== undefined) {
            return(<Link href={`${itemLink}/${konsulent.id}`}>Detaljer</Link>)
        }
    }

    return(
        <div className="container">
            <div className="row">
            {
                konsulenter.map(konsulent => {
                    return (
                        
                            <div key={konsulent.id} className="col s6 m3">
                                <div className="card small">
                                    <div className="card-image">
                                        {
                                            konsulent.bildeURL &&
                                            <Image height={250} width={100} src={konsulent.bildeURL} alt={`Profilbilde av ${konsulent.personalia.navn}`} />
                                        }
                                    </div>
                                    <div className="card-content">
                                        <div >
                                            { konsulent.personalia.navn }
                                        </div>
                                        {renderLink(konsulent)}
                                    </div>
                                </div>
                            </div>
                        
                    )
                }) 
            }
            </div>
        </div>
    )
}

export default KonsulentCards; 