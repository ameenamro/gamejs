// const guessCount = document.getElementById("guessCount");
// const wrongguessCount = document.getElementById("wrongguessCount");
// let v = 0;

// // guessCount.innerText = guessCount.innerText + v;
// console.log(guessCount.innerText);
// const main = document.getElementsByClassName("memory-card");
// // console.log(main[0]);

// let cards = Array.from(main);
// let f = true;
// console.log(cards[0]);
// for (let i = 0; i <= cards.length - 1; i++) {
//   console.log(main[i]);
// }
// cards.forEach((j) => {
//   console.log(j);

// console.log(i.target);
//   j.addEventListener("click", (a) => {
//     console.log(a.target);
//     // cards.forEach((k) => {
//     //   k.addEventListener("click", (l) => {
//     //     //     if (a.target != l.target && f == true) {
//     //     //       v++;
//     //     //       guessCount.innerText = v;
//     //     //       console.log(guessCount.innerText);
//     //     //     }
//     //     //     f = false;
//     //     //   });
//     //     console.log(l.target);
//     //   });
//   });
//   f = true;
//   });
// });

// console.log(a.target);
const guessCount = document.getElementById("guessCount");
const wrongguessCount = document.getElementById("wrongGuessCount");
let v = 0;
let d = 0;

function compareData(first, second) {
  const data1 = first.getAttribute("data-name");
  const data2 = second.getAttribute("data-name");

  if (data1 === data2) {
    first.classList.add("flip");
    second.classList.add("flip");
    v++;
    guessCount.innerText = v;
  } else {
    setTimeout(() => {
      first.classList.remove("flip");
      second.classList.remove("flip");
    }, 300);
    d++;
    wrongguessCount.innerText = d;
    // console.log(v);
  }
}

const gameBoard = document.querySelectorAll(".memory-card");
let firstCard = null;
let secondCard = null;

gameBoard.forEach((card) => {
  card.addEventListener("click", (e) => {
    card.classList.add("flip");

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      compareData(firstCard, secondCard);
      firstCard = null;
      secondCard = null;
    }
  });
});
