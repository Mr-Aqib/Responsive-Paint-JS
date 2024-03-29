let canvas=document.querySelector('.canvas')
let newdiv
canvas.addEventListener('mousemove',(e)=>
{
newdiv=document.createElement('div')
newdiv.classList.add('paint')
let xpos=e.clientX
let ypos=e.clientY
console.log(xpos)
newdiv.style.left =`${xpos -110}px`
newdiv.style.top =`${ypos-120}px`
canvas.append(newdiv)
})