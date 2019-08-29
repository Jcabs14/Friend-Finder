// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [

  {
    "name": "Captain America",
    "photo": "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/47/1542988952-captain-america-civil-war-128.png",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },

  {
    "name": "Iron Man",
    "photo": "https://7lwy5tgst9-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/Iron-Man.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]

  },
  
  

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
