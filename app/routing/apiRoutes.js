var friends = require("../data/friends.js");


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        function getSum(total, num) {
            return total + num;
        }
        var newFriendPersonality = newFriend.answers;
        for (var i = 0; i < friends.length; i++) {
            friendPersonality = friends[i].answers.reduce(getSum);
            friends[i].answers = friendPersonality;
            var totalDiff = Math.abs(friendPersonality - newFriendPersonality);
            friends[i].diff = totalDiff;
        }
       	friends.sort(function(a,b){
       		return a.diff - b.diff;
       	});
       	console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
    	
};