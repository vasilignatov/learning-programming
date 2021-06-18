// function solve() {
//   const results = document.getElementById('results');
//   const resultArr = [];
//   const [first, second, third] = document.querySelectorAll('section');
//   const firstBtns = document.getElementsByClassName('quiz-answer low-value');
//   const secondBtns = document.getElementsByClassName('quiz-answer high-value');



//   first.addEventListener('click', (e) => {
//     const firstLi = e.target == firstBtns[0];
//     const firstDiv = e.target == firstBtns[0].lastElementChild;
//     const firstP = e.target == firstBtns[0].lastElementChild.lastElementChild;

//     const secondLi = e.target == secondBtns[0];
//     const secondDiv = e.target == secondBtns[0].lastElementChild;
//     const secondP = e.target == secondBtns[0].lastElementChild.lastElementChild;

//     if (firstLi || firstDiv || firstP) {
//       resultArr.push(true);
//       first.style.display ='none';
//       second.style.display = 'block';
//     }
//     if (secondLi || secondDiv || secondP) {
//       resultArr.push(false);
//       first.style.display ='none';
//       second.style.display = 'block';
//     }
//   });

//   second.addEventListener('click', (e) => {
//     const firstLi = e.target == firstBtns[1];
//     const firstDiv = e.target == firstBtns[1].lastElementChild;
//     const firstP = e.target == firstBtns[1].lastElementChild.lastElementChild;

//     const secondLi = e.target == secondBtns[1];
//     const secondDiv = e.target == secondBtns[1].lastElementChild;
//     const secondP = e.target == secondBtns[1].lastElementChild.lastElementChild;

//     if (firstLi || firstDiv || firstP) {
//       resultArr.push(false);
//       second.style.display ='none';
//       third.style.display = 'block';
//     }
//     if (secondLi || secondDiv || secondP) {
//       resultArr.push(true);
//       second.style.display ='none';
//       third.style.display = 'block';
//     }
//   });


//   third.addEventListener('click', (e) => {
//     const firstLi = e.target == firstBtns[2];
//     const firstDiv = e.target == firstBtns[2].lastElementChild;
//     const firstP = e.target == firstBtns[2].lastElementChild.lastElementChild;

//     const secondLi = e.target == secondBtns[2];
//     const secondDiv = e.target == secondBtns[2].lastElementChild;
//     const secondP = e.target == secondBtns[2].lastElementChild.lastElementChild;

//     function getResult() {
//       if (resultArr.every(x => x == true)) {
//         return "You are recognized as top JavaScript fan!"
//       }
//       const rightAnswCount = resultArr.filter(x => x == true).length;
//       return `You have ${rightAnswCount} right answers`;
//     }

//     if (firstLi || firstDiv || firstP) {
//       resultArr.push(true);
//       third.style.display ='none';
//       results.style.display = 'block';
//       results.lastElementChild.lastElementChild.textContent = getResult();
//     }
//     if (secondLi || secondDiv || secondP) {
//       resultArr.push(false);
//       third.style.display ='none';
//       results.style.display = 'block';
//       results.lastElementChild.lastElementChild.textContent = getResult();
//     }
//   });
// }

function solve() {
  const resultArr = [];
  const results = document.getElementById('results');
  const [first, second, third] = document.querySelectorAll('section');
  const firstBtns = document.getElementsByClassName('quiz-answer low-value');
  const secondBtns = document.getElementsByClassName('quiz-answer high-value');
  const quizzie = document.getElementById('quizzie');
  let callBackCounter = 0;


  quizzie.addEventListener('click', (e) => {
    const firstLi = e.target == firstBtns[callBackCounter];
    const firstDiv = e.target == firstBtns[callBackCounter].lastElementChild;
    const firstP = e.target == firstBtns[callBackCounter].lastElementChild.lastElementChild;

    const secondLi = e.target == secondBtns[callBackCounter];
    const secondDiv = e.target == secondBtns[callBackCounter].lastElementChild;
    const secondP = e.target == secondBtns[callBackCounter].lastElementChild.lastElementChild;

    function getResult() {
      if (resultArr.every(x => x == true)) {
        return "You are recognized as top JavaScript fan!"
      }
      const rightAnswCount = resultArr.filter(x => x == true).length;
      return `You have ${rightAnswCount} right answers`;
    }

    if (callBackCounter == 0 && (firstLi || firstDiv || firstP)) {
      resultArr.push(false);
      first.style.display = 'none';
      second.style.display = 'block';
      callBackCounter++;
      return;
    } else if (callBackCounter == 0 && (secondLi || secondDiv || secondP)) {
      resultArr.push(true);
      first.style.display = 'none';
      second.style.display = 'block';
      callBackCounter++;
      return;
    }
    
    if (callBackCounter == 1 && (firstLi || firstDiv || firstP)) {
      resultArr.push(true);
      second.style.display = 'none';
      third.style.display = 'block';
      callBackCounter++;
      return;
    } else if (callBackCounter == 1 && (secondLi || secondDiv || secondP)) {
      resultArr.push(false);
      second.style.display = 'none';
      third.style.display = 'block';
      callBackCounter++;
      return;
    }
    
    if (callBackCounter == 2 && (firstLi || firstDiv || firstP)) {
      resultArr.push(true);
      third.style.display = 'none';
      results.style.display = 'block';
      results.lastElementChild.lastElementChild.textContent = getResult();
    } else if (callBackCounter == 2 && (secondLi || secondDiv || secondP)) {
      resultArr.push(false);
      third.style.display = 'none';
      results.style.display = 'block';
      results.lastElementChild.lastElementChild.textContent = getResult();
    }
  });
}