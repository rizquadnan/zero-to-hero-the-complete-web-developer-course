// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrayWithExclamation = [];
array.forEach(item => {
  arrayWithExclamation.push({
    ...item,
    username: `${item.username}!`
  })
});
console.log("forEach", arrayWithExclamation);

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayWithQuestion = array.map(item => {
  return {
    ...item,
    username: `${item.username}?`
  }
});
console.log("map", arrayWithQuestion);

//Filter the array to only include users who are on team: red
const onlyTeamRed = array.filter(item => item.team === "red");
console.log("filter", onlyTeamRed);

//Find out the total score of all users using reduce

// (1), what is the value of i?
console.log("reduce, total score", array.reduce((acc, item) => acc + item.score, 0));

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
