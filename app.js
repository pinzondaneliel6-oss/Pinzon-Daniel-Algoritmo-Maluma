const canciones = [
{ nombre: "Hawái", wins: 0, comparisons: 0 },
{ nombre: "Felices los 4", wins: 0, comparisons: 0 },
{ nombre: "Borró Cassette", wins: 0, comparisons: 0 },
{ nombre: "Corazón", wins: 0, comparisons: 0 },
{ nombre: "Chantaje", wins: 0, comparisons: 0 },
{ nombre: "El Perdedor", wins: 0, comparisons: 0 },
{ nombre: "Sobrio", wins: 0, comparisons: 0 },
{ nombre: "Cuatro Babys", wins: 0, comparisons: 0 },
{ nombre: "HP", wins: 0, comparisons: 0 },
{ nombre: "ADMV", wins: 0, comparisons: 0 }
];

let currentPair = [];

function getRandomPair() {
let index1 = Math.floor(Math.random() * canciones.length);
let index2;

```
do {
    index2 = Math.floor(Math.random() * canciones.length);
} while (index1 === index2);

currentPair = [index1, index2];

document.getElementById("optionA").innerText = canciones[index1].nombre;
document.getElementById("optionB").innerText = canciones[index2].nombre;
```

}

function vote(choice) {
let winnerIndex = currentPair[choice];
let loserIndex = currentPair[1 - choice];

```
canciones[winnerIndex].wins++;
canciones[winnerIndex].comparisons++;

canciones[loserIndex].comparisons++;

updateRanking();
getRandomPair();
```

}

function updateRanking() {
let ranking = canciones.map(c => {
let score = c.comparisons === 0 ? 0 : c.wins / c.comparisons;
return { ...c, score: score };
});

```
ranking.sort((a, b) => b.score - a.score);

let rankingList = document.getElementById("rankingList");
rankingList.innerHTML = "";

ranking.forEach(c => {
    let li = document.createElement("li");
    li.innerText = `${c.nombre} - Score: ${c.score.toFixed(2)}`;
    rankingList.appendChild(li);
});
```

}

getRandomPair();
