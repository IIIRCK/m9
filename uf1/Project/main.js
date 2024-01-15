

const cx = []
for (let i = 1; i <=3; i++) {
    cx.push(document.querySelector('#c'+i))
}


for (const c of cx) {
    let index = document.createElement('div')
    index.setAttribute('class','index')
    index.innerHTML = `
        <button c="1" onclick="slc(this)" ></button>
        <button c="2" onclick="slc(this)"></button>
        <button c="3" onclick="slc(this)"></button>
    `
    c.appendChild(index)
}

function slc(button){
    let a = button.getAttribute('c')
    let b = '#c'+a;
    let c = document.querySelector(b)
    c.scrollIntoView({
        behavior:'smooth',
        block:'center'
    })
}

document.addEventListener('scroll',function (e){
    //console.log(e)
})


let lst = 0;
let cs = 1
function gsd() {
    const cst = document.documentElement.scrollTop;
    if (cst > lst) {
        console.log('up')
    } else if (cst < lst) {
        console.log('down')
    } else {
        console.log('No hay desplazamiento');
    }

    lst = cst;
}

document.addEventListener('scroll', gsd);
