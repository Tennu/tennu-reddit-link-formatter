function getMatches(ircMessage){
    var userRegex = /(\/u\/\w+)/g;
    var subredditRegex = /(\/r\/\w+)/g;
    
    var result, allUsers = [];
    while((result = userRegex.exec(ircMessage)) != null) {
        let match = result[1]; // get the first match pattern of this match
        allUsers.push(match);
    }
    
    var result, allSubreddits = [];
    while((result = subredditRegex.exec(ircMessage)) != null) {
        let match = result[1]; // get the first match pattern of this match
        allSubreddits.push(match);
    }
    
    return {
        users: allUsers,
        subreddits: allSubreddits
    }
}

module.exports = {
    getMatches: getMatches,
};
