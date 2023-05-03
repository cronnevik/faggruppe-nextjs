import type { Konsulent } from "@/app/api/konsulenter/konsulent.types";
import { notFound } from "next/navigation";

/**
 * 
 * Data fetching for SSG
 */
export const hentAlleKonsulenterSSG = async(): Promise<Konsulent[]> => {
    // By default, fetch will automatically fetch and cache data indefinitely. 'force-cache' is the default
    // To fetch fresh data on every fetch request, use the cache: 'no-store' option. 
    const resultat = await fetch('http:0.0.0.0:3000/api/konsulenter', { cache: 'no-store' });
    if (!resultat.ok) {
        // This will activate the closest `error.` Error Boundary
        throw new Error('Failed to fetch data');
      }
    return resultat.json();
}

export const hentKonsulentSSG = async(id: string): Promise<Konsulent> => {
  const resultat = await fetch(`http:0.0.0.0:3000/api/konsulenter/${id}`);

    if (!resultat.ok) {
        return notFound();
    }

  return await resultat.json()
}