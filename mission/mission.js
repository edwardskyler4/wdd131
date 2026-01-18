const modeSelect = document.getElementById('display-mode');
const bodyContent = document.querySelector('body');
const logo = document.querySelector('img');

console.log(modeSelect);

modeSelect.addEventListener('change', changeTheme);

function changeTheme() {
    let current = modeSelect.value;
    if (current === 'dark') {
        bodyContent.classList.remove('light-mode');
        bodyContent.classList.add('dark-mode');
        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else if (current === 'light') {
        bodyContent.classList.remove('dark-mode');
        bodyContent.classList.add('light-mode');
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    } else {
        bodyContent.classList.remove('dark-mode');
        bodyContent.classList.remove('light-mode');
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    }
}