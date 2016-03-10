var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});

var TwitterBot = require("node-twitterbot").TwitterBot
var WordsDB = require("./database.js").Database

//WordsDB = new Database();

var PunkPainBot = new TwitterBot({
  "consumer_secret" :
  "5GQvdOD4fG1wbTWasYlEAK05xaC2avtrT7AifYE2hJ9cIJbues",
  "consumer_key" :
  "gtxRo4j3Fcmcu9Okne28oIep4",
  "access_token" :
  "708020567778136064-CXfARagXYiaMi5Hc11iJ0Uh87WuqDUH",
  "access_token_secret" :
  "lsEAi8qxGaZUbqTxB3D6BhaZszqBtc3I0VIzYWKEdb8dV"
});

function TweetAThought(){
    var tweetContent = WordsDB.GetRandomHitWord() +
    " me in the " + WordsDB.GetRandomBodyPartWord() +
    " with a " + WordsDB.GetRandomMeleeWord();
    console.log(tweetContent);
    PunkPainBot.tweet(tweetContent);
}
TweetAThought();
setInterval(TweetAThought, 1000 * 60 * 30);
