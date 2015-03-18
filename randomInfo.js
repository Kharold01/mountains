var RANDOM = [
  {"person": "Jennifer Lopez", "hometown": "New York City, New York" , "heightIn": 65, "birthday": "7/24/69", "age": 43},
  {"person": "Justin Bieber", "hometown": "London, Canada", "heightIn": 6, "birthday": "3/1/94", "age": 20},
  {"person": "Michael Jordan", "hometown": "Brooklyn, New York", "heightIn": 78024, "birthday": "2/17/63", "age": 60},
  {"person": "Ben Affleck", "hometown": "Berkeley, CA", "heightIn": 7620, "birthday": "8/15/72", "age": 15},
  {"person": "Miley Cyrus", "hometown": "Nashville, TN", "heightIn": 65, "birthday": "11/23/92", "age": 82},
  {"person": "SKylar Diggins", "hometown": "South Bend, IN", "heightIn": 69, "birthday": "8/2/90", "age": 30},
  {"person": "Ariana Grande", "hometown": "Boca Raton, FL", "heightIn": 60, "birthday": "6/26/93", "age": 11},
  {"person": "Jimmy Kimmel", "hometown": "Brooklyn, NY", "heightIn": 73, "birthday": "11/13/67", "age": age}
  ];
  
var age = 0;
for(var i = 0; i < RANDOM.length; i++) {
	age = (new Date().getTime()) - (new Date(RANDOM[i].birthday).getTime());
	age = Math.floor(age/1000/3600/24/365);
	RANDOM[i].age = age;
}
	

if (typeof module != "undefined" && module.exports)
  module.exports = RANDOM;
