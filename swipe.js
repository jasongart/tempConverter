var touchPoint,
    tpStartX,
    tpMoveX,
    tpStartY,
    tpMoveY


window.addEventListener("touchstart", function(e){
  touchPoint =  e.changedTouches[0];
  tpStartX = touchPoint.pageX;
  tpStartY = touchPoint.pageY;
  console.log(tpStartX);
  }
);

window.addEventListener("touchmove", function(e){
  touchPoint =  e.changedTouches[0];
  tpMoveX = touchPoint.pageX;
  tpMoveY = touchPoint.pageY;

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
  // 
  // if(tpMoveY < tpStartY){
  //   resultF++;
  //   document.getElementById("fahrenheit").value = resultF;
  //   getC();
  // }
  // else{
  //   resultF--;
  //   document.getElementById("fahrenheit").value = resultF;
  //   getC();
  // }

    console.log(tpMoveX);
    console.log(resultF);

  }
);
