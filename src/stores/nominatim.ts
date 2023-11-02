import { defineStore } from 'pinia'
import axios from "axios";
import type { TFormatResponse, ISearchSuggestion } from "@/types/nominatim";

export const useNominatimStore = defineStore('nominatim', () => {
    const url = 'https://nominatim.openstreetmap.org';
    const formatData: TFormatResponse = 'jsonv2';

    const fetchSearch = async (query: string) => {
        try {
            const params = {
                q: query,
                format: formatData
            };
            
            const { data } = await axios.get<ISearchSuggestion[]>(`${url}/search`, { params });

            return data
        } catch (error) {
            throw error;
        }
    }

    return { fetchSearch }
})
