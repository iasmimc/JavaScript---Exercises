const temperatureC = (celsius) => {
  var cTemp = celsius;
  var cToFahr = (cTemp * 9) / 5 + 32;
  var message = cTemp + `\xB0C is ` + cToFahr + `\xB0F.`;
  console.log(message);
};
const temperatureF = (fahrenheit) => {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  var message = fTemp + `\xB0F is ` + fToCel * `\xB0C.`;
  console.log(message);
};
temperatureC(60);
temperatureF(45);
