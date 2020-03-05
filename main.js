const lineThrough = (event) => {
    event.target.style.textDecoration = 'line-through'
}


const ols = document.querySelectorAll('ol')
for (const ol of ols){
    ol.addEventListener('click',lineThrough)
}



const opacityLine = (event) => {
    event.target.style.textDecoration = 'line-through'
    event.target.style.opacity = '0'
}


const lis = document.querySelectorAll('li')
for (const li of lis){
    li.addEventListener('click',opacityLine)
}

const beGone = (event) => {
    event.target.style.width = '0'
}

const smaller = document.querySelectorAll('#row')
for (const row of smaller) {
    row.addEventListener('click', beGone)
}



/*const arr = [lineThrough,opacityLine,beGone];

const button = document.querySelector('#destroy-all')
const destroy = (event) => {
for(const destruction of arr ){
.addEventListener.('click',destruction)
}  
}
button.addEventListener('click', destroy)*/

