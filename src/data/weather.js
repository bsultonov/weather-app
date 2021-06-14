const baseUrl = 'http://api.openweathermap.org/data/2.5/onecall?';
const apiKey = '351b563fc41a2cefa1479e55b3c2fba3';

export const getWeatherData = async ({lat = "41.311081", lon = "69.240562"}) => {
    try{
        let response = await fetch(baseUrl + `lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}`);
        console.log(response)
        
        return response;
    }catch(error) {
        throw error;
    }
}