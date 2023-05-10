import { Konsulent } from "@/ovelser/ressurser/konsulenter/konsulent.types";
import { notFound } from "next/navigation";

interface KonsiltenProfilProps {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const resultat = await fetch(`http://localhost:3050/api/konsulenter/${id}`, { next: { revalidate: 0 } });
  
      if (!resultat.ok) {
          return notFound();
      }
  
    return await resultat.json()
  }

export default async function KonsulentProfil({
    params: { id },
}: KonsiltenProfilProps) {
    const konsulent: Konsulent = await getData(id);
    return (
        <div className="container mx-auto px-4">
            <h1>{`Konsulent Profil for ${konsulent.personalia.navn}`}</h1>
            <p>{`ID: ${konsulent.id}`}</p>
        </div>
    )
}


/* interface KonsiltenProfilProps {
    params: {
        id: string
    }
}

export default function KonsulentProfil({
    params: { id },
}: KonsiltenProfilProps) {
    return (
        <div className="container mx-auto px-4">
            <h1>Konsulent Profil</h1>
            <p>{`ID: ${id}`}</p>
        </div>
    )
}
 */