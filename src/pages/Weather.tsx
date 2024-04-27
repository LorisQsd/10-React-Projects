import { TWeatherData } from '../@types/weatherTypes.d';
import Loader from '../components/loaders/Loader';
import Error from '../components/loaders/Error';
import useFetch from '../hooks/useFetch';

const API_KEY = import.meta.env.VITE_AQ_API_KEY;
const BASE_API_URL = 'http://api.airvisual.com/v2/';

function Content({ weatherData }: { weatherData: TWeatherData }) {
  const {
    data: {
      city,
      country,
      current: {
        weather: { tp: temperature, ic: icon },
      },
    },
  } = weatherData;

  return (
    <>
      <h2 className="text-xl ">{city}</h2>
      <p className="text-sm">{country}</p>

      <p className="pt-4 text-4xl font-semibold">{temperature}°</p>
      <img
        src={`/icons/${icon}.svg`}
        alt="weather icon"
        className="block pt-2 mx-auto"
      />
    </>
  );
}

export default function Weather() {
  const {
    loading,
    error,
    data: weatherData,
  } = useFetch(`${BASE_API_URL}nearest_city?key=${API_KEY}`);

  let content: JSX.Element;

  if (loading) {
    content = <Loader />;
  } else if (error) {
    content = <Error />;
  } else {
    content = <Content weatherData={weatherData as TWeatherData} />;
  }

  return (
    <section className="px-8 py-4 mx-auto mt-10 text-center text-black bg-gray-100 rounded-md shadow-2xl max-w-44 min-h-52">
      {content}
    </section>
  );
}
