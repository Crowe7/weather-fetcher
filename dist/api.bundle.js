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
    }
    const parsedWeather = new parsedWeatherClass;
    console.log(parsedWeather);
    return parsedWeather;

    }catch(err) {
        console.log(err);
    }
    

}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0EseUZBQXlGLEtBQUssMERBQTBELGFBQWE7QUFDcks7QUFDQSxvQ0FBb0MsTUFBTTtBQUMxQztBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1mZXRjaGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mZXRjaGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mZXRjaGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mZXRjaGVyLy4vc3JjL2FwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1pbXBlcmlhbCZhcHBpZD01NTg2MTBiOWJhNGY1ZmFjMmNiOThmYTlmYjc4OGZiZmAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgaWYod2VhdGhlci5vayAhPSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENpdHkgJHtjaXR5fSBub3QgZm91bmQhYCk7ICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXIuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG5cbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAvLyBtYXliZSBwdXQgdGhhdCBpbnNpZGUgb2YgYSBuZXcgZnVuY3Rpb24gdGhhdCBwYXN0ZXMgdGhlIGFsZXJ0IGludG8gdGhlIGRvbT8/XG4gXG4gICAgfVxuXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VXZWF0aGVyRGF0YShjaXR5KSB7XG4gICAgdHJ5e1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIoY2l0eSk7XG4gICAgXG4gICAgY2xhc3MgcGFyc2VkV2VhdGhlckNsYXNzIHtcbiAgICAgICAgRmVlbHNMaWtlID0gd2VhdGhlci5tYWluLmZlZWxzX2xpa2U7XG4gICAgICAgIFRlbXAgPSB3ZWF0aGVyLm1haW4udGVtcDtcbiAgICAgICAgSHVtaWRpdHkgPSB3ZWF0aGVyLm1haW4uaHVtaWRpdHk7XG4gICAgICAgIENvbmRpdGlvbiA9IHdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgV2luZCA9IHdlYXRoZXIud2luZDtcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkV2VhdGhlciA9IG5ldyBwYXJzZWRXZWF0aGVyQ2xhc3M7XG4gICAgY29uc29sZS5sb2cocGFyc2VkV2VhdGhlcik7XG4gICAgcmV0dXJuIHBhcnNlZFdlYXRoZXI7XG5cbiAgICB9Y2F0Y2goZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICAgIFxuXG59XG5cbmV4cG9ydCB7cGFyc2VXZWF0aGVyRGF0YX1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==