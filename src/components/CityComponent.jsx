import React from "react";
import styled from "styled-components";
import "../App.css";
import logo from "../icons/weather-logo.svg";

const CityLabel = styled.span`
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    margin: 10px auto;
`

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: none;
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    margin: 20px auto;
    & input{
        padding: 9px;
        font-size: 14px;
        border-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: none;
        outline: none;
        font-weight: 400;
        letter-spacing: .5px;
    }

    & button {
        background: #000;
        border: none;
        border-radius: 10px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        outline: none;
        font-weight: 400;
        font-size: 0.9rem;
        padding: 10px;
        color: #fff;
        cursor: pointer;
    }
`

const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    return (
        <>
            <img className="App-logo" src={logo}  alt="logo" />
            <CityLabel>
                Find weather of your city 
            </CityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="City Name" onChange={(e) => updateCity(e.target.value)} />
                <button type="submit">
                    Search
                </button>
            </SearchBox>
        </>
    );
};

export default CityComponent;