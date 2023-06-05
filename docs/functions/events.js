window.addEventListener("update-tab", (e) => {
    document
        .querySelector('component-report04-layout')
        .setAttribute('attr-tabname', e.detail.tab)
});

window.addEventListener("prepage-show", (e) => {    
    document
        .querySelector('component-report04-prepage')
        .setAttribute('page', e.detail.page)
});


window.addEventListener("app-mode", (e) => {    
    const form = document.querySelector('#form-container')
    const print = document.querySelector('#print-container')
    const mode = e.detail.mode
    if(mode === 'print'){
        form.classList.add('d-none')
        print.classList.remove('d-none')
    }else{
        form.classList.remove('d-none')
        print.classList.add('d-none')
    }    
});



