let paintboard = document.querySelector('.canvas')
let paint1 = document.querySelector('.size1')
let paint2 = document.querySelector('.size2')
let paint3 = document.querySelector('.size3')
let paint4 = document.querySelector('.size4')
let c1 = document.querySelector('.colors1')
let c2 = document.querySelector('.colors2')
let c3 = document.querySelector('.colors3')
let c4 = document.querySelector('.colors4')
let pallete=document.querySelector('#input')
let box
let hex


let ispaint1 = false
let ispaint2 = false
let ispaint3 = false
let ispaint4 = false


let iscolor1 = false
let iscolor2 = false
let iscolor3 = false
let iscolor4 = false
let ispallete= false


pallete.addEventListener('input',() =>
{
    ispallete=true
 iscolor1 = false
 iscolor2 = false
 iscolor3 = false
 iscolor4 = false
hex=pallete.value
console.log("helo")
})

paint1.addEventListener('click', () => {
    console.log("Helo")
    ispaint1 = true
    ispaint2 = false
    ispaint3 = false
    ispaint4 = false

})
paint2.addEventListener('click', () => {

    ispaint2 = true
    ispaint1 = false

    ispaint3 = false
    ispaint4 = false


})
paint3.addEventListener('click', () => {

    ispaint2 = false
    ispaint1 = false

    ispaint3 = true
    ispaint4 = false

})
paint4.addEventListener('click', () => {

    ispaint2 = false
    ispaint1 = false

    ispaint3 = false
    ispaint4 = true

})
c1.addEventListener('click', () => {

    iscolor1 = true
    iscolor2 = false
    iscolor3 = false
    iscolor4 = false
    ispallete= false
    

})
c2.addEventListener('click', () => {

    iscolor1 = false
    iscolor2 = true
    iscolor3 = false
    iscolor4 = false
    ispallete= false

})
c3.addEventListener('click', () => {

    iscolor1 = false
    iscolor2 = false
    iscolor3 = true
    iscolor4 = false
    ispallete= false

})
c4.addEventListener('click', () => {

    iscolor4 = false
    iscolor2 = false
    iscolor3 = false
    iscolor4 = true
    ispallete= false

})

paintboard.addEventListener('mousemove', (e) => {
    box = document.createElement('div')
    box.classList.add('paint')


    if (ispaint1) {
        box.style.width = `10px`
        box.style.height = `10px`
    } else if (ispaint2) {
        box.style.width = `20px`
        box.style.height = `20px`
    } else if (ispaint3) {
        box.style.width = `35px`
        box.style.height = `35px`
    } else if (ispaint4) {
        box.style.width = `45px`
        box.style.height = `45px`
    }


    if (iscolor1) {
        box.style.background = 'palevioletred'

    } else if (iscolor2) {
        box.style.background = 'rebeccapurple'
    } else if (iscolor3) {
        box.style.background = 'red'
    } else if (iscolor4) {
        box.style.background = 'peru'
    }
    else if (ispallete)
    {
        box.style.background = hex
    }

    let xpos = e.clientX
    let ypos = e.clientY
    box.style.left = `${xpos-110}px`
    box.style.top = `${ypos-120}px`
    paintboard.append(box)
})