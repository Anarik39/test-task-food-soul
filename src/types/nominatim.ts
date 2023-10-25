export interface ISearchSuggestion {
    addresstype: string;
    boundingbox: string[];
    category: string;
    display_name: string;
    importance: number;
    lat: string;
    licence: string;
    lon: string;
    name: string;
    osm_id: number;
    osm_type: string;
    place_id: number;
    place_rank: number;
    type: number;
}

export type TFormatResponse = 'xml' | 'json' | 'jsonv2' | 'geojson' | 'geocodejson';

