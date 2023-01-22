const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    text: "Akki",
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

console.log(CATEGORIES.find((cat)=> cat.name==='society').color)

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase

loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://xspijymsbfssuhslltnx.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzcGlqeW1zYmZzc3Voc2xsdG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzNzU1ODcsImV4cCI6MTk4OTk1MTU4N30.TF6MSF-_UcGdClpCy6G07xlVofj3gjOS6hTUNUhNrgU",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzcGlqeW1zYmZzc3Voc2xsdG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzNzU1ODcsImV4cCI6MTk4OTk1MTU4N30.TF6MSF-_UcGdClpCy6G07xlVofj3gjOS6hTUNUhNrgU",
      },
    }
  );

  const data = await res.json();

  //   console.log(data);
  //   const filteredData = data.filter((fact) => {
  //     return fact.category === 'technology'
  //   });

  createFactsList(data);
}

// createFactsList(initialFacts);
// createFactsList([{ text: "Akki" }]);

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML('afterbegin', '<li>Akki</li>')
  // factsList.insertAdjacentHTML('afterbegin', '<li>vivek</li>')

  const htmlArr = dataArray.map(
    (fact) =>
      `<li class="fact">
      
      <p>${fact.text}
      <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(Source)</a>
      </p>
      <span class="tag" style="background-color: ${CATEGORIES.find((cat)=> cat.name===fact.category).color}"
      >${fact.category}</span>
      </li>
     `
  );

  //   console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// **************************************

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age >= 0) {
//     return age;
//   } else {
//     return `Impossible year. Year needs to be less or equal ${currentYear}`;
//   }
// }

// const calcFactAge1 = (year) => {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;
//   return year <= currentYear
//     ? age
//     : `Impossible year. Year needs to be less or equal to ${currentYear}`;
// };

// const age1 = calcFactAge(2003)
// console.log(age1)
// console.log(calcFactAge(2003))

// let votesIntersting = 20;
// let votesMindblowing = 15;

// if (votesIntersting === votesMindblowing) {
//   alert("This fact is equally interesting and mindblowing");
// } else if (votesIntersting > votesMindblowing) {
//   console.log("Interesting fact");
// } else if (votesIntersting < votesMindblowing) {
//   console.llog("Mindblowing fact");
// }

// // falsy values: 0, '', null, undefined

// // truthy value: everything else...
// if (votesMindblowing) {
//   console.log("MINDBLOWING FACT!!!");
// } else {
//   console.log("Not so special...");
// }

// let votesFalse = 7
// const totalUpvotes = votesIntersting + votesMindblowing

// const message = !totalUpvotes > votesFalse ? "The fact is true" : "Might be false, check more sources"

// // alert(message)

// const text = "Lisbon is the capital of Portugal"
// const upperText = text.toUpperCase()
// console.log(upperText)

// const str = `The curretn fact: "${upperText}". It is ${calcFactAge(2003)}. `
// console.log(str)

const fact = ["Lisbon is the capital of Portugal", 2015, true];

// console.log(fact[0]);
// console.log(fact.length);
// console.log(fact[fact.length - 1]);

const [text, createdIn, isCorrect] = fact;

// console.log(text, createdIn, isCorrect);

const newFact = [...fact, "society"];

// console.log(newFact);

// [2, 4, 6, 8].forEach((num) => {
//   console.log(num);
// });

// const arr = [2, 4, 6, 8].map((num) => num * 10);

// console.log(arr);

// const factObj = {
//   text: "Lisbon is the capital of Portugal",
//   category: "society",
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function () {
//     return `The fact ${
//       this.text
//     } is from the category ${this.category.toUpperCase()}`;
//   },
// };

// console.log(factObj.text);
// console.log(factObj["text"]);

// const { category, isCorrect } = factObj;

// console.log(category, isCorrect);
// console.log(factObj.createSummary());

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allCategories = CATEGORIES.map((el) => el.name);

// // console.log(allCategories)

// const colors = CATEGORIES.map((el) => el.color);
// // console.log(colors)

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age >= 0) {
//     return age;
//   } else {
//     return `Impossible year. Year needs to be less or equal ${currentYear}`;
//   }
// }

// const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));

// console.log(factAges);
// console.log(factAges.join(" & "));

console.log(
  [7, 64, 6, -23, 11].filter((el) => {
    return el > 10;
  })
);


console.log(
  [7, 64, 6, -23, 11].find((el) => {
    return el > 10;
  })
);


