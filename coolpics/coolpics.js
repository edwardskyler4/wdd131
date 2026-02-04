const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', showMenu);


const gallery = document.getElementById('photo-gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function showMenu() {
    menu.classList.toggle('hide');
}

function openModal(e) {
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});