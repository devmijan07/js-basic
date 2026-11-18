export const countSelected = function(selectObject) {
    let numberSelected = 0;
    for(let i = 0; i < selectObject.options.length; i++) {
        if(selectObject.options[i].selected) numberSelected++
    }

    return numberSelected;
}

const btn  = document.getElementById('btn');

btn.addEventListener('click', () => {
    const musicType = document.getElementById('musicTypes');
    console.log(`You are selected ${countSelected(musicType)} option(s)`)
})