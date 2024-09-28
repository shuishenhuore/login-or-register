const register = document.getElementById('register');
const login = document.getElementById('login');
const login_register= document.querySelector('.login_register');
//register.addEventListener('click',()=>login_register.classList.add('active'));
login.addEventListener('click',()=>{login_register.classList.add('active_reverse')});

register.addEventListener('click',()=>{
    login_register.classList.remove('active_reverse');
    login_register.classList.add('active');
});

const register1 = document.getElementById('register1');
const login1 = document.getElementById('login1');
const verity = document.querySelector('.email');

const click_register = document.getElementById('click_register');
const click_login = document.getElementById('click_login');
const click_verity = document.getElementById('click_verify');
register1.onclick= function(){
    click_register.style.cssText = "animation:show 5s linear"
};
login1.onclick = function(){
    click_login.style.cssText = "animation:show 5s linear"
};
verity.onclick = function(){
    click_verity.style.cssText = "animation:show 5s linear"
};

setInterval(function(){
    let lists = document.querySelectorAll('.item');
    let background = document.querySelector('.background');
    background.appendChild(lists[0])
},5000)