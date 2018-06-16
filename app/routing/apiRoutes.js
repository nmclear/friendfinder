
// Friends Data
var friendsData = require("../data/friends");

module.exports = function(app){
    // GET Friend Data
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // POST newFriend Data
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        friendsData.push(newFriend);
    });








};