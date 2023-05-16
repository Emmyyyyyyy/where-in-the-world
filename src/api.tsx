import axios, { AxiosResponse } from 'axios';

// Define the shape of the data returned from the API
export type CountryData = {
  name: {
    common: string;
  };
  capital: string;
  population: number;
  region: string;
  flag: string;
};

// Define the shape of the response object returned by axios
type ApiResponse = {
  data: CountryData[];
};

// Define the type for the function that fetches data from the API
type FetchData = () => Promise<CountryData[]>;

// Define the function that fetches data from the API
export const fetchData: FetchData = async () => {
  try {
    const response = await axios.get<ApiResponse>('https://restcountries.com/v3.1/all');
    // console.log(response?.data);
    if (!response?.data || !response?.data?.data) {
      throw new Error('Unexpected response format');
    }
    return response?.data?.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
