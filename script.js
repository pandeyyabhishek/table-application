
// console.log("welcome to projA1!");


const form1 = document.querySelector("#form1");
const inp1 = document.querySelector(".inp1");
const res = document.querySelector(".result");

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    printTable(inp1.value);
})

function printTable(num) {

    let clutter = '';
    for (let i = 1; i < 11; i++) {
        clutter += `
        <h4>${num} * ${i} = ${num * i}</h4>
        <br/>
        `
    }
    res.innerHTML = clutter;
}