

function friend(friends) {
    let friendss = [];
  for (let i = 0; i < friends.length; i++) {
    if(friends[i].length == 4){
        friendss.push(`${friends[i]}`);
    }else{
        null;
    }
        
    }
    console.log(friendss)
  }


friend(["Mark", "Josh", "John", "Joshua"]);
