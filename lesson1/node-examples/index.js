var rect ={
  peri : function (a,b){
    return (2*(a+b));
  },
  area : function (a,b){
    return (a*b);
  }
};

function solveRect(a,b){
  if(a<=0 || b<=0){
    console.log("Dimensions should be greater than zero!!");
  }else{
      console.log("Area of rectangle is "+rect.area(a,b));
      console.log("Perimeter of rectangle is "+rect.peri(a,b));
  }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-2,6);
