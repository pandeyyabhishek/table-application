
// console.log("welcome to projA1!");


const form1 = document.querySelector("#form1");
const inp1 = document.querySelector(".inp1");
const res = document.querySelector(".result");

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    printTable(inp1.value);
})

const hindiMultipliers = [
    "एकम",
    "दूना",
    "तीया",
    "चौके",
    "पंचे",
    "छक्के",
    "सत्ते",
    "अठ्ठे",
    "नौवे",
    "धाय"
];
var k = 0;
function printTable(num) {

    let clutter = '';
    for (let i = 1; i < 11; i++) {
        clutter += `
        <h4>${num}   ${hindiMultipliers[k++]} (${i}) -> ${num * i}</h4>
        <br/>
        `
    }
    res.innerHTML = clutter;
}
