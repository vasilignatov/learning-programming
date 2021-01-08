function solve(input) {

   let daysOfTournament = Number(input[0]);
   let index = 1;
   let inputLine = input[index];

   let win = 0;
   let sum = 0;
   let sumDay = 0;
   let isWinTournament = false;
   let winDays = 0;

   for (let day = 1; day <= daysOfTournament; day++) {
      index++;
      inputLine = input[index];
      let games = 0

      while (inputLine !== 'Finish') {
         inputLine = input[index];
         if (inputLine === 'win') {
            sumDay += 20;
            win++;
            games++;
         } else if (inputLine === 'lose') {
            games++;
         }
         index++;
      }
      if (win / games > 0.5) {
         sumDay *= 1.1;
         winDays++;
      }
      sum += sumDay;
      win = 0;
      games = 0;
      sumDay = 0
   }
   if (daysOfTournament / 2 < winDays) {
      sum *= 1.2;
      isWinTournament = true;
   }
   if (isWinTournament) {
      console.log(`You won the tournament! Total raised money: ${sum.toFixed(2)}`);
   } else {
      console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`);
   }
}
solve([
   '3',
   'darts',
   'lose',
   'handball',
   'lose',
   'judo',
   'win',
   'Finish',
   'snooker',
   'lose',
   'swimming',
   'lose',
   'squash',
   'lose',
   'table tennis',
   'win',
   'Finish',
   'volleyball',
   'win',
   'basketball',
   'win',
   'Finish']);