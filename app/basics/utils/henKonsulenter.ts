import { Konsulent } from "@/app/api/konsulenter/konsulent.types";

const hentKonsulenter = async(): Promise<Konsulent[]> => {
    // By default, fetch will automatically fetch and cache data indefinitely. 'force-cache' is the default
    // To fetch fresh data on every fetch request, use the cache: 'no-store' option. 
    const resultat = await fetch('http:0.0.0.0:3000/api/konsulenter', { cache: 'no-store' });
    if (!resultat.ok) {
        // This will activate the closest `error.` Error Boundary
        throw new Error('Failed to fetch data');
      }
    return resultat.json();
}
export default hentKonsulenter;