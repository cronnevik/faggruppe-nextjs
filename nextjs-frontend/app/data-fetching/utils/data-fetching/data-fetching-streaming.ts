import { Konsulent } from "../../types/konsulent.types";

/**
 * 
 * Data fetching for SSR
 */
export const hentAlleKonsulenterStreaming = async(): Promise<Konsulent[]> => { 
    const resultat = await fetch(`http://localhost:3050/api/konsulenter?delay=1000`,  {
        cache: 'no-store' // is set only for demonstration purposes to reload and run demo again
    });
    if (!resultat.ok) {
        // This will activate the closest `error.` Error Boundary
        throw new Error('Failed to fetch data');
      }
    return resultat.json();
  }