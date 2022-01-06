/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseWeatherData": () => (/* binding */ parseWeatherData)
/* harmony export */ });

async function fetchWeather(city) {
    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=558610b9ba4f5fac2cb98fa9fb788fbf`, {mode: 'cors'});
        if(weather.ok != true) {
            throw new Error(`City ${city} not found!`);           
        }
        const weatherData = await weather.json();
        return weatherData;

    } catch(err) {
        alert(err);
        // maybe put that inside of a new function that pastes the alert into the dom??
 
    }

}


async function parseWeatherData(city) {
    try{
    const weather = await fetchWeather(city);
    
    class parsedWeatherClass {
        FeelsLike = weather.main.feels_like;
        Temp = weather.main.temp;
        Humidity = weather.main.humidity;
        Condition = weather.weather[0].description;
        Wind = weather.wind;
        Cringe = 'cringe';
    }
    const parsedWeather = new parsedWeatherClass;

    return parsedWeather;

    }catch(err) {
        console.log(err);
    }
    

}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0EseUZBQXlGLEtBQUssMERBQTBELGFBQWE7QUFDcks7QUFDQSxvQ0FBb0MsTUFBTTtBQUMxQztBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUV5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZldGNoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci8uL3NyYy9hcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9NTU4NjEwYjliYTRmNWZhYzJjYjk4ZmE5ZmI3ODhmYmZgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGlmKHdlYXRoZXIub2sgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7Y2l0eX0gbm90IGZvdW5kIWApOyAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuXG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgLy8gbWF5YmUgcHV0IHRoYXQgaW5zaWRlIG9mIGEgbmV3IGZ1bmN0aW9uIHRoYXQgcGFzdGVzIHRoZSBhbGVydCBpbnRvIHRoZSBkb20/P1xuIFxuICAgIH1cblxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlV2VhdGhlckRhdGEoY2l0eSkge1xuICAgIHRyeXtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGNpdHkpO1xuICAgIFxuICAgIGNsYXNzIHBhcnNlZFdlYXRoZXJDbGFzcyB7XG4gICAgICAgIEZlZWxzTGlrZSA9IHdlYXRoZXIubWFpbi5mZWVsc19saWtlO1xuICAgICAgICBUZW1wID0gd2VhdGhlci5tYWluLnRlbXA7XG4gICAgICAgIEh1bWlkaXR5ID0gd2VhdGhlci5tYWluLmh1bWlkaXR5O1xuICAgICAgICBDb25kaXRpb24gPSB3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIFdpbmQgPSB3ZWF0aGVyLndpbmQ7XG4gICAgICAgIENyaW5nZSA9ICdjcmluZ2UnO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZWRXZWF0aGVyID0gbmV3IHBhcnNlZFdlYXRoZXJDbGFzcztcblxuICAgIHJldHVybiBwYXJzZWRXZWF0aGVyO1xuXG4gICAgfWNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgICBcblxufVxuXG5leHBvcnQge3BhcnNlV2VhdGhlckRhdGF9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=