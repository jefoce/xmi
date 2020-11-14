import { ReTimeout } from './extensions/re-timeout.js';


const body = document.body;
const reset = {
    reseters: [
        'reset-transitions'
    ],
    turn(isOn) {
        if (isOn === true)    
            for (const reseter of this.reseters)
                body.classList.add(reseter)                
        else
            for (const reseter of this.reseters)
                body.classList.remove(reseter)
    }
}


const reReset = new ReTimeout(()=>reset.turn(false), 200);
function reloadAll() {
        
    reset.turn(true);
    reReset.restart();
}


function reloadVH() { 

    body.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}




window.addEventListener('resize', () => {

    if (window.innerWidth > 600) reloadAll();
});

window.addEventListener('load', () => {

    window.scrollTo({top: 0}); 

    reloadAll();
    reloadVH();
});