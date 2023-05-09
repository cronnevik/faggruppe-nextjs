import { Konsulent } from "../../types/konsulent.types";
import { notFound } from "next/navigation";

/**
 * 
 * Data fetching for ISR
 */

export const hentAlleKonsulenterISR = async(): Promise<Konsulent[]> => {
  // By default, fetch will automatically fetch and cache data indefinitely. 'force-cache' is the default
  // To fetch fresh data on every fetch request, use the cache: 'no-store' option. 
  const resultat = await fetch(`http://localhost:3050/api/konsulenter`, {
    next: { revalidate: 10 }
  });
  if (!resultat.ok) {
      // This will activate the closest `error.` Error Boundary
      throw new Error('Failed to fetch data');
    }
  return resultat.json();
}

export const hentKonsulentISR = async(id: string): Promise<Konsulent> => {
  const resultat = await fetch(`http://localhost:3050/api/konsulenter/${id}`, {
    next: { revalidate: 10 }
});

    if (!resultat.ok) {
        return notFound();
    }

  return await resultat.json()
}