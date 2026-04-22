let lightCost=0;
let multiCost=0;
let photoCost=0;
let pricePerSquer = 12;

document.querySelector('.checkLight').addEventListener('mouseup',e=>{
    if(lightCost===0){
        lightCost = 50;
    }else{
        lightCost = 0;
    }
    // console.log("light -"+lightCost)
});

document.querySelector('.checkMulti').addEventListener('mouseup',e=>{
    if(multiCost===0){
        multiCost = 60;
    }else{
        multiCost = 0;
    }
    // console.log("multi - "+multiCost)
});

document.querySelector('.checkPhoto').addEventListener('mouseup',e=>{
    if(photoCost===0){
        photoCost = 70;
    }else{
        photoCost = 0;
    }
    // console.log("photo - "+photoCost)
});

document.querySelector('.btn-main').addEventListener('click',e=>{
    const ceilingType = document.querySelector('.ceiling-type').value;
    const ceilingTexture = document.querySelector('.ceiling-texture').value;
    let ceilingLength = document.querySelector('.length').value;
    if(ceilingLength==""){
        ceilingLength=1;
        document.querySelector('.length').value= ceilingLength;
    }
    let ceilingWidth = document.querySelector('.width').value;
    if(ceilingWidth==""){
        ceilingWidth=1;
        document.querySelector('.width').value = ceilingWidth;
    }
    const totalArea = ceilingLength*ceilingWidth;
    
    if(totalArea<10){
        pricePerSquer = 15;
    }
    
    const result = (totalArea*pricePerSquer) *ceilingType*ceilingTexture + lightCost+ multiCost+photoCost;
    document.querySelector('.total-price').innerHTML = " "+ result +" " ;
    document.querySelector('.total-area').innerHTML = " "+totalArea+" ";
    
});


