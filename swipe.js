var touchPoint,
    tpStartX,
    tpMoveX,
    dist


window.addEventListener("touchstart", function(e){
  touchPoint =  e.changedTouches[0];
  tpStartX = touchPoint.pageX;
  console.log(tpStartX);
  }
);

window.addEventListener("touchmove", function(e){
  touchPoint =  e.changedTouches[0];
  tpMoveX = touchPoint.pageX;

  if(tpMoveX > tpStartX){
    resultF++;
    document.getElementById("fahrenheit").value = resultF;
    getC();
  }
  else{
    resultF--;
    document.getElementById("fahrenheit").value = resultF;
    getC();
  }


    console.log(tpMoveX);
    console.log(resultF);

  }
);
