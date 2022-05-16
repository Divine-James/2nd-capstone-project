const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const form = document.getElementById('form');
const userName = document.getElementById('username');

const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const state = false;


hamburger.addEventListener('click', ()=>{
   
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener('click', ()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}));

function toggle(){
  
    if(state){
        document.getElementById('password').setAttribute('type','password');
        document.getElementById('eye').style.color ="#7a797e";
        state = false;
    }else{
        document.getElementById('password').setAttribute('type','text');
        document.getElementById('eye').style.color ="#5887ef";
        state = true;
    }
}
function togglepw(){
    if(state){
        document.getElementById('password2').setAttribute('type','password');
        document.getElementById('eye2').style.color ="#7a797e";
        state = false;
    }else{
        document.getElementById('password2').setAttribute('type','text');
        document.getElementById('eye2').style.color ="#5887ef";
        state = true;
    }
}
form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
});
const setError = (element,message) =>{
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success')
};
const setSucess = element =>{
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText ='';
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
};


const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'username is required');
    }else{
        setSucess(username);
    }
    if(passwordValue === ''){
        setError(password, 'password is required');
    }else if (passwordValue.length<8){
        setError(password, 'password must be at least 8 character.')
    }else{
        setSucess(password);
    }
    if(password2Value === ''){
        setError(password, 'password is required');
    }else if (passwordValue.length<8){
        setError(password, 'password must be at least 8 character.')
    }else if (password2Value !== passwordValue){
        setError(password2, 'does not match')
    }
    else{
        setSucess(password);
    }
};
