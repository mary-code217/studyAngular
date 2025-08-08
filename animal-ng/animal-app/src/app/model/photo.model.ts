export interface Photo {
    id:string;
    name:string;
    url:string;
}

export interface PhotoResponse {
    photos: Photo[];
}