// for toggling the show hide password
let show_state = false;
const password = document.getElementById('password');
const shToggler = document.getElementById('show-hide');
shToggler.addEventListener('click',()=>{
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    if(show_state === true){
        shToggler.innerText = "Hide";
        show_state = false;
    }
    else if(show_state === false){
        shToggler.innerText = "Show";
        show_state = true;
    }
    else
        shToggler.innerText = "Hide";
})
