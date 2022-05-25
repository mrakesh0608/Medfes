document.getElementById('toggle-register-btn').addEventListener('click',()=>toggle_form(1));
document.getElementById('toggle-login-btn').addEventListener('click',()=>toggle_form(0));

function toggle_form(val){
    if(val){
        document.getElementById('Sign-In').style.display = 'none';
        document.getElementById('Register').style.display = 'block';
    }else{  
        document.getElementById('Register').style.display = 'none';
        document.getElementById('Sign-In').style.display = 'block'
    }
}

const label = document.getElementsByClassName('form__label');
Array.from(label).forEach(element =>{
    element.addEventListener('click',(e)=>{
        element.previousElementSibling.focus();
    })
});