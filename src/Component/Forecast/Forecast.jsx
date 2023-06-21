import * as FS from "./ForecastStyles"
import { useState } from "react";
import { WDisplayBG } from "../Weather/CurrWeather"

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Forecast = ({ data }) => {

    const groupDateData = (array) => {

        return array.reduce((prev, curr) => {
            let dateGroup = new Date(curr.dt_txt).toLocaleDateString();

            if (!prev[dateGroup]) {
                prev[dateGroup] = []
            }

            prev[dateGroup].push(curr);
            return prev
        }, {})
    }

    const [ForecastDayNum, setForecastDayNum] = useState(0);

    const DateTime = (data, type) => {
        const [date, time] = data.dt_txt.split(" ");
        if (type === "d")
            return date
        if (type === "t")
            return time
    }

    return (
        <FS.ForecastContent>
            <FS.DayChoosing>
                <FS.DayChoosingBut onClick={() => setForecastDayNum(0)}>Hôm nay</FS.DayChoosingBut>
                <FS.DayChoosingBut onClick={() => setForecastDayNum(3)}>3 ngày tiếp theo</FS.DayChoosingBut>
                <FS.DayChoosingBut onClick={() => setForecastDayNum(5)}>5 ngày tiếp theo</FS.DayChoosingBut>
            </FS.DayChoosing>

            <FS.Title>{ForecastDayNum} ngày tiếp theo</FS.Title>

            {Object.keys(groupDateData(data.list)).filter((_, index) => index <= ForecastDayNum).map((item, index) => {
                let currentItem = groupDateData(data.list)[item]
                return (<div>
                    <FS.Title>{new Date(currentItem[0].dt_txt).toLocaleDateString()}</FS.Title>
                    <div style={{ display: "flex" }}>
                        {
                            currentItem.map(e => {
                                return (
                                    <FS.ForecastContent style={{ background: WDisplayBG(e) }}>
                                        <FS.DailyForecastItem>
                                            {console.log(e)}
                                            <FS.DailyForecastItem>
                                                {DateTime(e, "t")}
                                                <FS.DailyForecastIcon src={`icons/${e.weather[0].icon}.png`} />
                                                <FS.Temp>{Math.round(e.main.temp)}°C</FS.Temp>
                                            </FS.DailyForecastItem>
                                        </FS.DailyForecastItem>
                                    </FS.ForecastContent>
                                )
                            })
                        }
                    </div>

                </div>)
            })}
        </FS.ForecastContent>
    )
}

export default Forecast;