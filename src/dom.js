import {parseWeatherData } from "./api";



function getSearchValue() {
    let value = document.getElementById('search').value;
    return value
}

async function submitValue() {
    let city = getSearchValue();
    const cityData = await parseWeatherData(city);

     console.log(cityData.Temp);
}


function bindSearchBtn() {
   let searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', submitValue);
}


export {bindSearchBtn}