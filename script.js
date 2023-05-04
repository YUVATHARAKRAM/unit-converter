const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function convertTemperature() {
  const temperatureInput = document.getElementById("temperature-input").value;
  const unitSelector = document.getElementById("unit-selector");
  const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

  if (!temperatureInput || isNaN(temperatureInput)) {
    alert("Please enter a valid temperature");
    return;
  }

  let convertedTemperature;

  if (selectedUnit === "Celsius") {
    convertedTemperature = (temperatureInput * 1.8) + 32;
    result.innerHTML = `${temperatureInput}°C is ${convertedTemperature}°F`;
  } else {
    convertedTemperature = (temperatureInput - 32) / 1.8;
    result.innerHTML = `${temperatureInput}°F is ${convertedTemperature}°C`;
  }
}

convertBtn.addEventListener("click", convertTemperature);
