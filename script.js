const btnDarkModeDesktop = document.querySelector('#moonDesktop');
const btnDarkModeMobile = document.querySelector('#moonMobile');
const darkHTML = document.querySelector('html');

const login = document.querySelector('#login');
const btnLoginMobile = document.querySelector('#accountMobile');
const btnLoginDesktop = document.querySelector('#accountDesktop');


btnLoginMobile.addEventListener('click', loginToogle);
btnLoginDesktop.addEventListener('click', loginToogle);

function loginToogle(event)
{
    event.preventDefault();
    login.classList.toggle('hidden');
    login.classList.toggle('flex');
}


btnDarkModeDesktop.addEventListener('click', darkMode);
btnDarkModeMobile.addEventListener('click', darkMode );

function darkMode(event)
{
    event.preventDefault();
    darkHTML.classList.toggle('dark'); 
}