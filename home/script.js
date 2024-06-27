let list = document.querySelector('.slider .list');
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length -1;

next.onclick = function(){
    if(active+1> lengthItems){
        active = 0
    }
    else{
        active = active +1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active -1<0){
        active = lengthItems;
    }
    else{
        active = active -1;
    }
    reloadSlider()
}
let refreshSlider = setInterval(()=>{next.click()}, 5000);
function reloadSlider(){
    let chechLeft = items[active].offsetLeft;
    list.style.left = -chechLeft + 'px'

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click',function(){
        active = key;
        reloadSlider()
    })
})
const categories = document.querySelectorAll('.becoming, .crying, .the, .in, .hmart, .little, .women, .song, .of, .solomon, .act, .creative, .tale, .handmaid, .kite, .runner, .where, .sing, .crawdads');

const el = document.getElementById('searchform')
el.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEl = document.getElementById('searchInput')
    const query = inputEl.value;
    
    if (!query) {
        categories.forEach(category => {
            category.style.display = 'block';
        })
    }

    categories.forEach(category => {
        debugger;
        const categoryName = category.classList[0];
        
        if (categoryName.includes(query)) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
})