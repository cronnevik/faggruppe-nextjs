import { Konsulent } from "../../types/konsulent.types";
import { notFound } from "next/navigation";

/**
 * 
 * Data fetching for SSR
 */
export const hentAlleKonsulenterSSR = async(): Promise<Konsulent[]> => { 
  const resultat = await fetch(`http://localhost:3050/api/konsulenter`);
  if (!resultat.ok) {
      // This will activate the closest `error.` Error Boundary
      throw new Error('Failed to fetch data');
    }
  return resultat.json();
}

export const hentKonsulentSSR = async(id: string): Promise<Konsulent> => {
  const resultat = await fetch(`http://localhost:3050/api/konsulenter/${id}`);

    if (!resultat.ok) {
        return notFound();
    }

  return await resultat.json()
}