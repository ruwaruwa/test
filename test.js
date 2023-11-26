// const buttom = document.querySelector('button')
// const body= document.querySelector('body')
// buttom.addEventListener('click',function changecolor() {
//     buttom.style.backgroundColor='red';
//     body.style.backgroundColor='blue'
//     });
    ///button fun
const btnon=document.querySelector('#btnon')
    
const btnof=document.querySelector('#btnof')
// const boxlight= document.querySelector('.box-light')
const imgOne= document.querySelector('.on')
const imgtwo= document.querySelector('.off')

btnon.addEventListener('click',function(){
    // boxlight.style.backgroundColor='yellow';
    imgOne.style.display='block'
    imgtwo.style.display='none'
btnon.style.color='red';
btnof.style.color='black'
})
btnof.addEventListener('click',function(){
    // boxlight.style.backgroundColor="transparent";bl
    imgOne.style.display='none'
    imgtwo.style.display='block'
    btnof.style.color="red"
    btnon.style.color='black'
})




