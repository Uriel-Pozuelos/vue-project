import { useWeatherStore } from "@/stores/weatherStore";
import { getWeather } from "@/helpers/getWeather";

export const useWeather = async () => {
    const temp = await getWeather();
    const weatherStore = useWeatherStore();
    
    weatherStore.temp = temp;

}