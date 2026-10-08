

function displayWelcome() {
    const header = document.querySelector("header");
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysIndex = new Date().getDay();
    const currDay = days[daysIndex]
    const message = document.createElement("p");
    message.textContent = `Hello! Today is ${currDay}!`
    header.appendChild(message)
}


function addIndex() {
    const scriptureElements = document.querySelectorAll(".scripture")
    scriptureElements.forEach((section, index) => {
        section.prepend(document.createElement("span").textContent = index + 1 + ")");
    }

    )
}

addIndex()
displayWelcome()


const menuBtn = document.querySelector(".menu-btn")
const navEl = document.querySelector(".main-nav")

function toggleMenu() {
    navEl.classList.toggle("hide")
    menuBtn.classList.toggle("change")
}

menuBtn.addEventListener("click", toggleMenu)