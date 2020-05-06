export interface CasosDiario {
    date: Date,
    country: string,
    state: string,
    city: string,
    ibgeID: string,
    newDeaths: number,
    deaths: number,
    newCases: number,
    totalCases: number,
}