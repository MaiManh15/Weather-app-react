import styled from "styled-components"

export const WeatherDisplay = styled.div`
    width: 300px;
    border-radius: 10px;
    margin: 20px auto 0 auto;
    padding: 0 20px 20px 20px;
`;

export const WDTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin: 0px 20px 0px 0px;
`;

export const City = styled.p`
    font-weight: 600;
    font-size: 22px;
    line-height: 1;
    margin: 0;
    letter-spacing: 1px;
`;
export const WeatherForcast = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1;
    margin: 0;
`;

export const WeatherIcon = styled.img`
    width: 100px;
`;

export const WDBott = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`;

export const Temp = styled.p`
    font-size: 60px;
    font-weight: 500;
    margin: 10px 0;
    letter-spacing: -2px;
`;

export const Details = styled.div`
    width: 100%;
    padding-left: 20px;
`;

export const DetailsLabel = styled.span`
    font-weight: 500;
    text-align: left;
    font-size: 20px;
`;

export const ParameterRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ParameterLabel = styled.span`
    font-weight: 400;
    text-align: left;
    font-size: 16px;
`;

export const ParameterValue = styled.span`
    font-weight: 500;
    text-align: right;
    font-size: 16px;
`;

export const Suggest = styled.div`
    color: white
`;
