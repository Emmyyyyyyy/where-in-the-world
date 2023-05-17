import axios from 'axios';

export interface CountryData {
  name: { common: string };
  population: number;
  region: string;
  capital: string;
  flags: { svg: string; alt: string };
}

type SetDataFunction = React.Dispatch<React.SetStateAction<CountryData[] | undefined>>;

export const fetchAllData = async (setData: SetDataFunction): Promise<void> => {
  try {
    const response = await axios.get<CountryData[]>('https://restcountries.com/v3.1/all');
    setData(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const fetchSelectedRegionData = async (
  setData: SetDataFunction,
  region: string
): Promise<void> => {
  try {
    const response = await axios.get<CountryData[]>(
      'https://restcountries.com/v3.1/region/' + region
    );
    setData(response.data);
  } catch (error) {
    console.error(error);
  }
};

