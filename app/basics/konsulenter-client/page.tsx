"use client"

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import KonsulentListe from "../components/konsulent-liste/konsulent-liste.component";

const Konsulenter = () => {
    const { isLoading, error, data } = useQuery('konsulenter', () =>
        fetch('/api/konsulenter').then(res => {
            return res.json()
        }), {
        cacheTime: 5000 // cache for 5 seconds
    })

        if (isLoading) {return (<div>Laster...</div>)}
        if (error) {return (<div>En feil har oppstått</div>)}
        if (!data) {return (<div>Ingen data</div>)}

        return (  
            <KonsulentListe konsulenter={data} />
        )
}
const KonsulenterClient = () => {
    const queryClient = new QueryClient();
    return (
        <div className="container">
            <h4>Client</h4>
            <QueryClientProvider client={queryClient}>
                <Konsulenter />
            </QueryClientProvider>
        </div>
    )
}
export default KonsulenterClient;