const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName === 'IMG') {
        const imgClicked = e.target;
        const fileName = imgClicked.getAttribute("src");
        const alt = imgClicked.alt;
        const largeImg = fileName.replace("-sm", "-full");
        modalImage.setAttribute("src", largeImg);
        modalImage.setAttribute("alt", alt);
        modal.showModal();
    }
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

const menuBtn = document.querySelector("#menu");
const navEl = document.querySelector(".nav");

function toggleNav() {
    navEl.classList.toggle("hide")
}

menuBtn.addEventListener('click', toggleNav)