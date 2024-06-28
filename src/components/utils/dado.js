export default function rollTwoDice() {
    function rollDie() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    const die1 = rollDie();
    const die2 = rollDie();
  
    return die1 + die2;
  }
  