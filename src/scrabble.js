const calcScrabbleScore = (letter) => {
  switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "l":
    case "n":
    case "r":
    case "s":
    case "t":
      return 1;
    case "d":
    case "g":
      return 2;
    case "b":
    case "c":
    case "m":
    case "p":
      return 3;
    case "f":
    case "h":
    case "v":
    case "w":
    case "y":
      return 4;
    case "k":
      return 5;
    case "j":
    case "x":
      return 8;
    case "q":
    case "z":
      return 10;
  }
};
class Scrabble {
  constructor(string) {
    if (string == null) {
      this.string = "";
    } else if(string == " \t\n"){
      this.string = "";
    }
      else {
      this.string = string.toLowerCase();
    }
  }

  score() {
    let score = 0;
    for (let i = 0; i < this.string.length; i++) {
      // Generate a loop and add it to the score param
      score += calcScrabbleScore(this.string[i]);
    }
    console.log(score);
    return score;
  }
}
export default Scrabble;
