var rect = require('./rectangle');

function solveRect(a,b){
  rect(a,b,function (err,rectangle){
    if(err){
      console.log("Error : "+err.message);
    }else{
      console.log("Area of rectangle is "+rectangle.area());
      console.log("Perimeter of rectangle is "+rectangle.peri());
    }
  });

  console.log("this statement is executed after the rect function.");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-2,6);
