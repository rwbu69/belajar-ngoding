var isSquare = function(n){
    if(n < 0 ){
      return false;
    }else if(n === 0){
      return true;
    }else{
      for(let i = 1; i <= n; i++){
        if (i * i === n){
          return true;
        }else if(i * i > n){
          return false;
        }
      }return false;
    }
  }