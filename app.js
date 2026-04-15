
document.querySelector('.calc-button').addEventListener('click',e=>{
    const square = document.querySelector('.square').value;
    const material = document.querySelector('.material').value;
    const price = square*material;
    document.querySelector('.price-answer').innerHTML = "<span>"+price+" Fr</span>";
});