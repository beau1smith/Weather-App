console.log("hello");

async function directGeocodingByLocation(city_name = '', state_code = '', country_code = '', limit = 5) {
  let response = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${state_code},${country_code}&limit={limit}&appid={API key}`);
  let geoData = await (await response).json;
  console.log(geoData);
}

async function directGeocodingByZipcode(zipcode) {

}