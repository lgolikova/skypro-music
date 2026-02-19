export interface Track {
    _id: string;
    name: string;
    author: string;
    release_date: string;
    genre: string[];
    duration_in_seconds: number;
    album: string;
    logo: string | null;
    track_file: string;
    stared_user: any[];
}

export interface selectionData {
    name: string;
    items: number[];
}
