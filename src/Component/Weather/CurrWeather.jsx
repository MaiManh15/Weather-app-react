import * as CWS from "./CurrWeatherStyles"
import { capitalizeFirstLetter } from "../Forecast/Forecast"

export const WDisplayBG = (data) => {
    if (data.weather[0].main === "Clear" & Math.round(data.main.temp) > 30)
        return "#ffcd00"
    else if (data.weather[0].main === "Clouds")
        return "#b2bbc1"
    else if (data.weather[0].main === "Thunderstorm")
        return "#627c89"
    else if (data.weather[0].main === "Rain")
        return "#96b9cc"
    else if (data.weather[0].main === "Drizzle" || data.weather[0].main === "Haze")
        return "#acd1e5"
    else if (data.weather[0].main === "Snow")
        return "#c4d6d3"
    else if (data.weather[0].main === "Clear" & Math.round(data.main.temp) <= 30)
        return "#19c3fb"
    else return "#19c3fb"
}

const CurrWeather = ({ data }) => {

    const Suggestion = () => {
        let Suggest = "";
        if (data.weather[0].main === "Clouds")
            Suggest = "Trời hôm nay có mây"
        else if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle")
            Suggest = "Nhớ mang ô khi ra ngoài"
        else if (data.weather[0].main === "Clear" & Math.round(data.main.temp) > 30)
            Suggest = "Nhớ bôi kem chống nắng"
        else if (data.weather[0].main === "Snow")
            Suggest = "Nhớ mặc áo ấm khi ra ngoài"
        else if (data.weather[0].main === "Thunderstorm")
            Suggest = "Hạn chế ra khỏi nhà"
        else if (data.weather[0].main === "Haze")
            Suggest = "Ngoài trời có sương mù"
        else Suggest = "Không có gợi ý"

        return Suggest
    }

    return (
        <CWS.WeatherDisplay style={{ background: WDisplayBG(data) }}>
            <CWS.WDTop>
                <div>
                    <CWS.City>{data.city}</CWS.City>
                    <CWS.WeatherForcast>{capitalizeFirstLetter(data.weather[0].description)}</CWS.WeatherForcast>
                </div>
                <CWS.WeatherIcon alt="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </CWS.WDTop>
            <CWS.WDBott>
                <CWS.Temp>{Math.round(data.main.temp)}°C</CWS.Temp>
                <CWS.Details>
                    <CWS.ParameterRow>
                        <CWS.DetailsLabel>Chi tiết</CWS.DetailsLabel>
                    </CWS.ParameterRow>
                    <CWS.ParameterRow>
                        <CWS.ParameterLabel>Cảm giác</CWS.ParameterLabel>
                        <CWS.ParameterValue>{Math.round(data.main.feels_like)}°C</CWS.ParameterValue>
                    </CWS.ParameterRow>
                    <CWS.ParameterRow>
                        <CWS.ParameterLabel>Nhiệt độ thấp</CWS.ParameterLabel>
                        <CWS.ParameterValue>{Math.round(data.main.temp_min)}°C</CWS.ParameterValue>
                    </CWS.ParameterRow>
                    <CWS.ParameterRow>
                        <CWS.ParameterLabel>Nhiệt độ cao</CWS.ParameterLabel>
                        <CWS.ParameterValue>{Math.round(data.main.temp_max)}°C</CWS.ParameterValue>
                    </CWS.ParameterRow>
                    <CWS.ParameterRow>
                        <CWS.ParameterLabel>Gió</CWS.ParameterLabel>
                        <CWS.ParameterValue>{data.wind.speed} m/s</CWS.ParameterValue>
                    </CWS.ParameterRow>
                </CWS.Details>
            </CWS.WDBott>
            <CWS.Suggest>
                <CWS.ParameterRow>
                    <CWS.ParameterLabel>Gợi ý:</CWS.ParameterLabel>
                    <CWS.ParameterValue>{Suggestion()}</CWS.ParameterValue>
                </CWS.ParameterRow>
            </CWS.Suggest>
        </CWS.WeatherDisplay>
    )
}

export default CurrWeather;