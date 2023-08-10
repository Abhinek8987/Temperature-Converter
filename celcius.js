function temperatureConverter(givenNum) {
    givenNum = parseFloat(givenNum);
    document.getElementById("outputCelcius").innerHTML=(givenNum-32) * 5/9;
  }