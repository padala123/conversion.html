function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    
    if (tempInput === '') {
        resultDiv.innerHTML = "Please enter a temperature.";
        return;
    }

    const temperature = parseFloat(tempInput);
    let result;

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        result = `${temperature}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = celsius + 273.15;
        result = `${temperature}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else if (unit === 'kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${temperature}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    resultDiv.innerHTML = result;
}

