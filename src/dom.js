import {parseWeatherData } from "./api";



function getSearchValue() {
    let value = document.getElementById('search').value;
    return value
}

async function submitValue() {
    let city = getSearchValue();
    const cityData = await parseWeatherData(city);
    return cityData
}

function clearInputValue(input) {
    input.value = '';
}

function searchBtnFunctions() {
    displayWeather();
    clearInputValue(document.getElementById('search'));
}

function bindSearchBtn() {
   let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', searchBtnFunctions);
}


async function displayWeather() {
    let weatherDom = document.getElementById('weather');
    const cityData = await submitValue();
    let i = 0;


    for( const condition in cityData) {
        let weatherCondition = `${cityData[condition]}`;
        weatherDom.children[i].textContent = `${condition}: ` + weatherCondition;
        i++
    }

}

export {bindSearchBtn}