// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on our survey.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/survey", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    app.post("/api/survey", function(req, res) {

        var bestFriend = {
            name: "",
            photo: "",
            friendDifference: 10000,
          };

        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newPerson = req.body;

        var newPersonScore = newPerson.scores;

        //difference of both people
        var difference;
      
        console.log(newPerson);
      
        friendsData.push(newPerson);
      
        res.json(newPerson);
      });

};
