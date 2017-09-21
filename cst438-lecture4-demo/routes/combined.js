var gettyAPI = require("/home/ubuntu/workspace/cst438-lecture4-demo/helpers/getty");
var twitterAPI = require('/home/ubuntu/workspace/cst438-lecture4-demo/helpers/twitter');
var async = require("async");
var express = require('express');
var router = express.Router();

    
router.get('/', function(req, res, next){
    async.parallel([
    twitterAPI.doAllTwitterRequests,
    gettyAPI.makeApiRequest
    ],
    function(err, results){
        var tweets = results[0];
        var imageURI = results[1];
        
        //console.log("image URI " + imageURI);
        //console.log("num tweets: " + tweets.length);
        res.render('combined', {tweetsList: tweets, imageURI: imageURI});
    });
});

module.exports = router;