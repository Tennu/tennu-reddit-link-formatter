var chai = require('chai');
var should = chai.should();

describe('units: reddit-urls', function () {
    
    var redditUrls = require("../lib/reddit-urls");
    
    it('Should return user and subreddit URLS.', function () {
        
        var redditHits = redditUrls.getMatches("Hello /u/tory and /u/jeff have you see /r/programming yet?");
        
        redditHits.users[0].should.be.equal('/u/tory');
        redditHits.users[1].should.be.equal('/u/jeff');
        redditHits.subreddits[0].should.be.equal('/r/programming');
        
    });
    
});