const josh = new Josh();

let createDiv = (tagName, parent, innerHTML, className) => {
    let el = document.createElement(tagName);
    parent.appendChild(el);
    el.innerHTML = innerHTML;
    if(className){
        el.classList.add(className);
    };
    return el
}

// const trigger = new ScrollTrigger({
//     trigger: {
//       once: true
//     }
//   })
// trigger.add('[data-trigger]')




// HOVER EFFECTS

let els = document.querySelectorAll("nav.side-nav .social-icons .social-btn");

let makeItFlash = (item) => {
    item.onmouseover = () => {
        let svg = item.children[0];
        svg.classList.add("flashing");
    }
    item.onmouseout = () => {
        let svg = item.children[0];
        svg.classList.remove("flashing");
    }
}

for(let item of els){
    item.classList.add('hidden');
    makeItFlash(item);
}

let cover = document.querySelector('.cover')
let coverBtns = cover.querySelectorAll('.social-btn')
coverBtns.forEach(btn => {
    makeItFlash(btn)
})


// ONCLICK EFFECTS

let arrowNav = document.getElementsByClassName("arrow-nav")[0];
let me = document.getElementsByClassName("me-icon")[0];
let shown = false;

let toggleMenu = (isShown) => {
    
    if(!isShown){
        arrowNav.parentElement.classList.remove("pos-change-back")
        arrowNav.parentElement.classList.add("pos-change");
        for(let i of els){
            i.classList.remove('hidden')
        }
        me.classList.add("hidden")
        shown = true;
    }
    else {
        arrowNav.parentElement.classList.add("pos-change-back")
        arrowNav.parentElement.classList.remove("pos-change");
        for(let i of els){
            i.classList.add('hidden')
        }
        me.classList.remove("hidden");
        shown = false;
    }
}

me.onclick = () => {
    toggleMenu(shown);
}
arrowNav.parentElement.onclick = () => {
    toggleMenu(shown);
    
}


    

    
