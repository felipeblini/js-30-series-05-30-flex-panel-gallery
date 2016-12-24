const panels = document.querySelectorAll('.panel');

// function toggleClass(e, cssclass) {
//     if(e.type === "transitionend") {
//         if(!e.propertyName.includes('flex')) {
//             return;
//         } else {
//             e.srcElement.classList.toggle(cssclass);
//         }
//     }

//     e.srcElement.parentNode.classList.toggle(cssclass);
// }

// panels.forEach(el => el.addEventListener('click', e => toggleClass(e, 'open')));
// panels.forEach(el => el.addEventListener('transitionend', e => toggleClass(e, 'open-active')));

//ou 

function toggleOpen(e, pnls) {
    pnls.forEach(el => el.classList.remove('open'));
    //use the word 'this' because 'this' refers the owner of the function (who's calling the function)     
    e.srcElement.parentNode.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(el => el.addEventListener('click', e => toggleOpen(e, panels)));
panels.forEach(el => el.addEventListener('transitionend', toggleActive));