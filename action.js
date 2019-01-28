var calculateTemp = document.querySelectorAll(".temp"),
    bgColor = document.getElementById("tempBGcolor"),
// var bgBack = document.getElementById("tempBGcolorBack");

    resultC = " ",
    resultF = " ",
//target temp values...may not need starting as current and end values
//are all that are needed to run calculations
    endTemp = " ",
    end = " ",
    startTemp = " ",
    start = " ",


//starting and target color values
    red = " ",
    green = " ",
    blue = " ",
    targetRed = " ",
    targetGreen = " ",
    targetBlue = " "



  function getC()
  {
    resultF = document.getElementById("fahrenheit").value;
    var tempC = (resultF - 32) * (5/9);
    resultC = document.getElementById("celsius").value = Math.round(tempC);
    changeBG();
  };

  function getF(){
    resultC = document.getElementById("celsius").value;
    var tempF = resultC * (9/5) + 32;
    resultF = document.getElementById("fahrenheit").value = Math.round(tempF);
    changeBG();
  };


calculateTemp[0].addEventListener("input", function(event){
  getC();
});

calculateTemp[1].addEventListener("input", function(event){
  getF();
});


// Color objects

var ddPurple = {
    endTemp: -10,
    hexNum: "#372a3d",
    red: 55,
    green: 42,
    blue: 61
};

var darkPurple = {
    endTemp: 0,
    hexNum: "#562d58",
    red: 86,
    green: 45,
    blue: 88
};

var indigo = {
    endTemp: 10,
    hexNum: "#313b7b",
    red: 49,
    green: 59,
    blue: 123
};

var darkBlue = {
    endTemp: 20,
    hexNum: "#134b9e",
    red: 19,
    green: 75,
    blue: 158
};

var blueO = {
    endTemp: 30,
    hexNum: "#305adb",
    red: 48,
    green: 90,
    blue: 219
};

var lightBlue = {
    endTemp: 40,
    hexNum: "#0081d3",
    red: 0,
    green: 129,
    blue: 211
};

var turquoise = {
    endTemp: 50,
    hexNum: "#00a39a",
    red: 0,
    green: 163,
    blue: 154
};

var greenO = {
    endTemp: 60,
    hexNum: "#00bb34",
    red: 0,
    green: 187,
    blue: 52
};

var yellowGreen = {
    endTemp: 70,
    hexNum: "#7ac600",
    red: 122,
    green: 198,
    blue: 0
};

var yellow = {
    endTemp: 80,
    hexNum: "#d7c000",
    red: 215,
    green: 192,
    blue: 0
};

var orange = {
    endTemp: 90,
    hexNum: "#ef7600",
    red: 239,
    green: 118,
    blue: 0
};

var redO = {
    endTemp: 100,
    hexNum: "#cd3400",
    red: 205,
    green: 52,
    blue: 0
};

var darkRed = {
    endTemp: 110,
    hexNum: "#9f0d14",
    red: 159,
    green: 13,
    blue: 20
};

var deepDarkRed = {
    endTemp: 150,
    hexNum: "#581100",
    red: 88,
    green: 17,
    blue: 0
};

// var ddDarkRed = {
//     endTemp: 451,
//     hexNum: "#361e20",
//     red: 54,
//     green: 30,
//     blue: 32
// };


//function to detect and run change color function
function changeBG(){

  var currentTemp = resultF;

  //conditions based on currentTemp which is = to the Fahrenheit input
  if (currentTemp < -150){
    // start = turquoise.startTemp;
    // end = ddPurple.endTemp;
    red = ddPurple.red;
    blue = ddPurple.blue;
    green = ddPurple.green;
    }

  if (currentTemp > -20 && currentTemp <= -10){
    // start = turquoise.startTemp;
    end = ddPurple.endTemp;
    red = ddPurple.red;
    blue = ddPurple.blue;
    green = ddPurple.green;
    targetRed = darkPurple.red;
    targetBlue = darkPurple.blue;
    targetGreen = darkPurple.green;
    }

  if (currentTemp > -10 && currentTemp <= 0){
    // start = turquoise.startTemp;
    end = darkPurple.endTemp;
    red = darkPurple.red;
    blue = darkPurple.blue;
    green = darkPurple.green;
    targetRed = indigo.red;
    targetBlue = indigo.blue;
    targetGreen = indigo.green;
    }

  if (currentTemp > 0 && currentTemp <= 10){
    // start = turquoise.startTemp;
    end = indigo.endTemp;
    red = indigo.red;
    blue = indigo.blue;
    green = indigo.green;
    targetRed = darkBlue.red;
    targetBlue = darkBlue.blue;
    targetGreen = darkBlue.green;
    }

  if (currentTemp > 10 && currentTemp <= 20){
    // start = turquoise.startTemp;
    end = darkBlue.endTemp;
    red = darkBlue.red;
    blue = darkBlue.blue;
    green = darkBlue.green;
    targetRed = blueO.red;
    targetBlue = blueO.blue;
    targetGreen = blueO.green;
    }

    if (currentTemp > 20 && currentTemp <= 30){
      // start = turquoise.startTemp;
      end = blueO.endTemp;
      red = blueO.red;
      blue = blueO.blue;
      green = blueO.green;
      targetRed = lightBlue.red;
      targetBlue = lightBlue.blue;
      targetGreen = lightBlue.green;
      }

  if (currentTemp > 30 && currentTemp <= 40){
    // start = turquoise.startTemp;
    end = lightBlue.endTemp;
    red = lightBlue.red;
    blue = lightBlue.blue;
    green = lightBlue.green;
    targetRed = turquoise.red;
    targetBlue = turquoise.blue;
    targetGreen = turquoise.green;
    }

  if (currentTemp > 40 && currentTemp <= 50){
    // start = turquoise.startTemp;
    end = turquoise.endTemp;
    red = turquoise.red;
    blue = turquoise.blue;
    green = turquoise.green;
    targetRed = greenO.red;
    targetBlue = greenO.blue;
    targetGreen = greenO.green;
    }

  if (currentTemp > 50 && currentTemp <= 60){
    // start = green.startTemp;
    end = greenO.endTemp;
    red = greenO.red;
    blue = greenO.blue;
    green = greenO.green;
    targetRed = yellowGreen.red;
    targetBlue = yellowGreen.blue;
    targetGreen = yellowGreen.green;
    }

    if (currentTemp > 60 && currentTemp <= 70){
      // start = green.startTemp;
      end = yellowGreen.endTemp;
      red = yellowGreen.red;
      blue = yellowGreen.blue;
      green = yellowGreen.green;
      targetRed = yellow.red;
      targetBlue = yellow.blue;
      targetGreen = yellow.green;
      }

    if (currentTemp > 70 && currentTemp <= 80){
        // start = green.startTemp;
        end = yellow.endTemp;
        red = yellow.red;
        blue = yellow.blue;
        green = yellow.green;
        targetRed = orange.red;
        targetBlue = orange.blue;
        targetGreen = orange.green;
    }

    if (currentTemp > 80 && currentTemp <= 90){
        // start = green.startTemp;
        end = orange.endTemp;
        red = orange.red;
        blue = orange.blue;
        green = orange.green;
        targetRed = redO.red;
        targetBlue = redO.blue;
        targetGreen = redO.green;
    }

    if (currentTemp > 90 && currentTemp <= 100){
        // start = green.startTemp;
        end = redO.endTemp;
        red = redO.red;
        blue = redO.blue;
        green = redO.green;
        targetRed = darkRed.red;
        targetBlue = darkRed.blue;
        targetGreen = darkRed.green;
    }

    if (currentTemp > 100 && currentTemp <= 110){
        // start = green.startTemp;
        end = darkRed.endTemp;
        red = darkRed.red;
        blue = darkRed.blue;
        green = darkRed.green;
        targetRed = deepDarkRed.red;
        targetBlue = deepDarkRed.blue;
        targetGreen = deepDarkRed.green;
    }


    //Numerical gap between starting and finishing value for RGB of each color object
    var redGap = Math.abs(targetRed - red);
    var blueGap = Math.abs(targetBlue - blue);
    var greenGap = Math.abs(targetGreen - green);
    // percentage is "distance" current temp is from the end temperature
    //and is multiplied by the gap to get new color value
    var tempPercent = (end - currentTemp) * .1;
    var angle = 30;
    var gradientPercent = tempPercent * 100;

    //If target is greater the gap subtracts, if it's less the gap adds
    if (targetRed > red){
        var newRed = Math.trunc(targetRed - redGap * tempPercent);
    }
    else{
        var newRed = Math.trunc(targetRed + redGap * tempPercent);
    }

    if (targetBlue > blue){
        var newBlue = Math.trunc(targetBlue - blueGap * tempPercent);
    }
    else{
        var newBlue = Math.trunc(targetBlue + blueGap * tempPercent);
    }

    if (targetGreen > green){
        var newGreen = Math.trunc(targetGreen - greenGap * tempPercent);
    }
    else{
        var newGreen = Math.trunc(targetGreen + greenGap * tempPercent);
    }
    //failed gradient attempt
    // bgColor.style.backgroundImage = 'linear-gradient(' + angle + 'deg , rgb(' + red + ' , ' + green + ' , ' + blue + ')' ,
    // 'rgb(' + newRed + ',' + newGreen + ',' + newBlue + ') '+ gradientPercent +'%)';

    bgColor.style.backgroundColor = 'rgb(' + newRed + ',' + newGreen + ',' + newBlue + ')';

    //logging calculations to console to check if they're working correctly
    console.log("START HERE - current Temp: "  + currentTemp);
    console.log("End: "  + end);
    console.log("tempPercent: "  + tempPercent);

    console.log("Red: "  + red  + "   Target Red: "  + targetRed  + "   New Red: " + newRed);

    console.log("Green: "  + green  + "   Target Green: "  + targetGreen  + "   New Green: " + newGreen);

    console.log("Blue: " + blue  + "   Target Blue: "  + targetBlue  + "   New Blue: " + newBlue);

    console.log("redGap: "  + redGap);
    console.log("greenGap: "  + greenGap);
    console.log("blueGap: "  + blueGap);

};



//Initialize on load
window.onload = getF();
