var TwitterBot = require("node-twitterbot").TwitterBot;
// Include your access information below
var Bot = new TwitterBot({
  "consumer_secret": "",
  "consumer_key": "",
  "access_token": "",
  "access_token_secret": ""
});
var pos = 0;
var msgs = [];
msgs.push('Project Awesome Gameservers! http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Want somewhere you can game AND meet new friends? http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Project Awesome! Minecraft Minigames and More! http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Want a private Server to play on? We do those too!! http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Public Creative Starmade Server? We got that!! http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Enjoy Gaming, but not know anyone online?? http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Terraria your thing? We got that!! http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Starbound anyone? http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Project Awesome Servers, We have a Wow Guild! http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Project Awesome Tshirts are Available: http://www.cafepress.ca/projectawesomeservers  #whatisprojectawesome');
msgs.push('Want a private Server to play on? We do those too!! http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Bored? Wanna Chat? Play a game with someone? http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Youtube boring you? http://whatisprojectawesome.com  #whatisprojectawesome');
msgs.push('Want a private Server to play on? We do those too!! http://whatisprojectawesome.com  #whatisprojectawesome');
var currentpos = function () {
    pos++;
    if (pos >= msgs.length) {
        pos = 0;
    }
    return pos;
};
var tweetthis = function () {
    console.log('tweeting on behalf of projectawesome');
    Bot.tweet(msgs[currentpos()]);
    console.log('tweet sent');
};
var selftimer = setInterval(function () {
    tweetthis();

}, 3600000); //1h
tweetthis();
