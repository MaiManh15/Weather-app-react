import styled from "styled-components"

export const ForecastContent = styled.div`
    flex: 1 1;
    border-radius: 6px;
`;

export const DayChoosing = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DayChoosingBut = styled.button`
    height: 50px;
    max-width: 150px;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    margin-top: 25px;
    margin-bottom: 25px;
    cursor: pointer;
    padding: 10px;
    min-width: 100px;
    flex: 1 1;
`;

export const Title = styled.label`
    font-size: 22px;
    font-weight: 500;
`;

export const DailyForecastItem = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    
`;

export const DailyForecastIcon = styled.img`
    width: 45px;
    margin: auto;
`;

export const Day = styled.div`
    font-weight: 600;
    font-size: 18px;
`;

export const Des = styled.div`
    flex: 1 1;
    margin-right: 15px;
    text-align: right;
    font-size: 18px;
`;

export const Temp = styled.label`
    font-size: 18px;
    margin: auto;
`;
