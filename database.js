
var Database = new Object();
  var hitWords = [
    "Hit",
    "Stab",
    "Shank",
    "Punch"
  ];

  var bodyPartWords = [
    "head",
    "kneecap",
    "ribs",
    "skull",
    "teeth",
    "eye",
    "dick",
    "leg",
    "forearm",
    "ear",
    "jaw",
    "nose"
  ];

  var meleeWords = [
    "pogo stick",
    "broom",
    "chainsaw",
    "porn magazine",
    "pen",
    "colossal cabbage",
    "dog",
    "cold pizza",
    "broken glass bottle",
    "thousand tacks",
    "dead man's fist",
    "rusty spear",
    "pack of cigarrettes"
  ];


  Database.GetRandomHitWord = function(){
    return hitWords[Math.floor(Math.random() * hitWords.length)];
  }

  Database.GetRandomBodyPartWord = function(){
    return bodyPartWords[Math.floor(Math.random() * hitWords.length)];
  }

  Database.GetRandomMeleeWord = function(){
    return meleeWords[Math.floor(Math.random() * meleeWords.length)];
  }


exports.Database = Database;
