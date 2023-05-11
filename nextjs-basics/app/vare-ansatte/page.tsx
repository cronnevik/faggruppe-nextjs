import Konsulenter from '../components/konsulenter.component'

async function getData() {
    const resultat = await fetch(`http://localhost:3050/api/konsulenter`);
    if (!resultat.ok) {
        // This will activate the closest `error.` Error Boundary
        throw new Error('Failed to fetch data');
      }
    return resultat.json();
}

export default async function VareAnsatte() {
    const data = await getData()
    return (
        <div className="container mx-auto px-4">
            <h1>Våre ansatte</h1>
            <Konsulenter itemLink="/vare-ansatte" konsulenter={data} />
        </div>
    )
}



/* Øvelse 3 - dynamic routing

import Konsulenter from '../components/konsulenter.component'
import { KonsulentData } from '@/ovelser/ressurser/konsulenter/konsulenter.data'

export default function VareAnsatte() {
    return (
        <div className="container mx-auto px-4">
            <h1>Våre ansatte</h1>
            <Konsulenter itemLink="/vare-ansatte" konsulenter={KonsulentData} />
        </div>
    )
}
 */