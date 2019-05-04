module.exports = function(a,b,callback){
  if(a<=0 || b<=0){
    setTimeout(function(){
        return callback(new Error("Dimensions should be greater than zero!!"),null);
    },2000);
  }else{
    setTimeout(function(){
        return callback(null,{
          peri : function(){ return (2*(a+b));},
          area : function(){ return (a*b);}
        });
    },2000);
  }
};
