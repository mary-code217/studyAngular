export interface CityInfo {
    cost:string;
    fun:string;
    safety:number;
    internet: string;
    air:string;
    food:number;
}

export interface City {
    id:number;
    total:string;
    region:string;
    city:string;
    country:string;
    image:string;
    info:CityInfo;
}

export interface Cities {
    cities:City[];
}