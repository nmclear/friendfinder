
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

        console.log(newFriend.scores);
        // console.log(friendsData);
        // console.log(friendsData[0].scores);

        var allFriendDiffArr = [];
        // loop through all friends in friendsData
        for(var i =0; i < friendsData.length; i++){
            // total difference for each friendsData
            var totalDifference = 0;

            // loop through scores and compare newFriend to current friend
            var roundFriendScores = friendsData[i].scores;
            for(var j = 0; j < roundFriendScores.length; j++){
                var searchFriend = parseInt(roundFriendScores[j])
                var testFriend = parseInt(newFriend.scores[j])

                var questionDiff = Math.abs(searchFriend - testFriend);
                totalDifference += questionDiff;

            }
            console.log(totalDifference);
            // added to arr for later check
            allFriendDiffArr.push(totalDifference);
        }
        console.log(allFriendDiffArr);
        // function to find the closest friends
        closestFriend(allFriendDiffArr);





        friendsData.push(newFriend);

    });


    function closestFriend(arr){
        //find smallest totalDifference
        var min = Math.min.apply(null, arr);
        console.log(min);
        // var index = arr.indexOf(min);
        // console.log('index of min is:  ' + index);
        // console.log('this is the closest friend:  ' + friendsData[index].name);
    
    //find indices of the smallest differences
        var indices = [];
        var index = arr.indexOf(min);
        while (index != -1) {
            indices.push(index);
            index = arr.indexOf(min, index + 1);
        }
        //each of the closest friend(s)
        console.log('lowest indexes..   ' + indices);
        for(var i = 0; i < indices.length; i++){
            var closeIndex = indices[i];
            console.log('this is the closest friend:  ' + friendsData[closeIndex].name)
        }

    }

};