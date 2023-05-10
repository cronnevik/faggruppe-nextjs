export interface Konsulent {
    id: string,
    bildeURL?: string,
    personalia: Personalia,
    spisskompetanse?: string[]
}

export interface Personalia {
    navn: string,
    adresse?: Adresse,
    telefon?: string,
    epost?: string,
}

export interface Adresse {
    gatenavn?: string,
    postnummer?: string,
    poststed?: string,
}

export type GetKonsulentParams = {
    params: {
        id: string
    }
}