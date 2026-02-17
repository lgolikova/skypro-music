export interface Track {
    album: string;
    author: string;
    duration_in_seconds: number;
    genre: string[];
    logo: string | null;
    name: string;
    release_date: string;
    staredUser: [];
    track_file: string;
    _id: string;
}

export interface SelectionResponse {
    name: string;
    items: number[];
}
