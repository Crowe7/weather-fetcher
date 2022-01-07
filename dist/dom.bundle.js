/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindSearchBtn": () => (/* binding */ bindSearchBtn)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");




function getSearchValue() {
    let value = document.getElementById('search').value;
    return value
}

async function submitValue() {
    let city = getSearchValue();
    const cityData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.parseWeatherData)(city);

     console.log(cityData.Temp);
}


function bindSearchBtn() {
   let searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', submitValue);
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLEtBQUssMERBQTBELGFBQWE7QUFDcks7QUFDQSxvQ0FBb0MsTUFBTTtBQUMxQztBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRXlCOzs7Ozs7O1VDekN6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDOzs7O0FBSXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQWdCOztBQUUzQztBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWZldGNoZXIvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZldGNoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItZmV0Y2hlci8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoY2l0eSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPWltcGVyaWFsJmFwcGlkPTU1ODYxMGI5YmE0ZjVmYWMyY2I5OGZhOWZiNzg4ZmJmYCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZih3ZWF0aGVyLm9rICE9IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2NpdHl9IG5vdCBmb3VuZCFgKTsgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5qc29uKCk7XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcblxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIC8vIG1heWJlIHB1dCB0aGF0IGluc2lkZSBvZiBhIG5ldyBmdW5jdGlvbiB0aGF0IHBhc3RlcyB0aGUgYWxlcnQgaW50byB0aGUgZG9tPz9cbiBcbiAgICB9XG5cbn1cblxuXG5hc3luYyBmdW5jdGlvbiBwYXJzZVdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgICB0cnl7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoV2VhdGhlcihjaXR5KTtcbiAgICBcbiAgICBjbGFzcyBwYXJzZWRXZWF0aGVyQ2xhc3Mge1xuICAgICAgICBGZWVsc0xpa2UgPSB3ZWF0aGVyLm1haW4uZmVlbHNfbGlrZTtcbiAgICAgICAgVGVtcCA9IHdlYXRoZXIubWFpbi50ZW1wO1xuICAgICAgICBIdW1pZGl0eSA9IHdlYXRoZXIubWFpbi5odW1pZGl0eTtcbiAgICAgICAgQ29uZGl0aW9uID0gd2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBXaW5kID0gd2VhdGhlci53aW5kO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZWRXZWF0aGVyID0gbmV3IHBhcnNlZFdlYXRoZXJDbGFzcztcbiAgICBjb25zb2xlLmxvZyhwYXJzZWRXZWF0aGVyKTtcbiAgICByZXR1cm4gcGFyc2VkV2VhdGhlcjtcblxuICAgIH1jYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gICAgXG5cbn1cblxuZXhwb3J0IHtwYXJzZVdlYXRoZXJEYXRhfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3BhcnNlV2VhdGhlckRhdGEgfSBmcm9tIFwiLi9hcGlcIjtcblxuXG5cbmZ1bmN0aW9uIGdldFNlYXJjaFZhbHVlKCkge1xuICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWVcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3VibWl0VmFsdWUoKSB7XG4gICAgbGV0IGNpdHkgPSBnZXRTZWFyY2hWYWx1ZSgpO1xuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcGFyc2VXZWF0aGVyRGF0YShjaXR5KTtcblxuICAgICBjb25zb2xlLmxvZyhjaXR5RGF0YS5UZW1wKTtcbn1cblxuXG5mdW5jdGlvbiBiaW5kU2VhcmNoQnRuKCkge1xuICAgbGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdG4nKTtcblxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFZhbHVlKTtcbn1cblxuXG5leHBvcnQge2JpbmRTZWFyY2hCdG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9