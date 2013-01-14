var users = db.User.find({},{"item.id": 1}).pretty();
var userArray = []; 
while(users.hasNext()) {
    userArray.push(users.next().item.id);
}
printjson(userArray);
