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
