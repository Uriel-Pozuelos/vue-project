import { defineStore } from "pinia"
import { ref } from "vue"

export const useWeatherStore = defineStore('weather', () => {
    const weather = ref()

    const setTemp = (temp) => {
        weather.value = temp
    }

    return {
        weather,
        setTemp
    }

})