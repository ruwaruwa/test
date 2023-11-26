// const buttom = document.querySelector('button')
// const body= document.querySelector('body')
// buttom.addEventListener('click',function changecolor() {
//     buttom.style.backgroundColor='red';
//     body.style.backgroundColor='blue'
//     });
    
const btnon=document.querySelector('#btnon')
    
const btnof=document.querySelector('#btnof')
const boxlight= document.querySelector('.box-light')

btnon.addEventListener('click',function(){
    boxlight.style.backgroundColor='yellow';
btnon.style.color='red';
btnof.style.color='black'
})
btnof.addEventListener('click',function(){
    boxlight.style.backgroundColor="transparent";
    btnof.style.color="red"
    btnon.style.color='black'
})




