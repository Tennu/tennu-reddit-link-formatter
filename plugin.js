var TennuRedditLinkFormatter = {
    init: function(client, imports) {
        
        var redditUrl = 'https://www.reddit.com';
        
        var redditUrls = require("./lib/reddit-urls");

        function searchAndReply(privMsg) {
            let matchResult = redditUrls.getMatches(privMsg.message);
            if (matchResult.users.length || matchResult.subreddits.length) {
                return matchResult.users.map(mapFunction).concat(matchResult.subreddits.map(mapFunction)).join(' ');
            }
            function mapFunction(m){
                return redditUrl + m;
            };
        }

        return {
            handlers: {
                "privmsg": searchAndReply,
            }
        }
    }
};

module.exports = TennuRedditLinkFormatter;
