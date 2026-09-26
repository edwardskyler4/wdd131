const selectMenu = document.querySelector("#theme");
const bodyEl = document.querySelector("body");
const img = document.querySelector("img");
const header = document.querySelector("header");

selectMenu.addEventListener('change', function(event) {
    const selectedValue = selectMenu.value;

    if (selectedValue == "dark"){
        bodyEl.classList.toggle("dark")
        header.style.setProperty("border-bottom", "0.1px white solid")
        img.setAttribute("src", "images/byui-logo-white.png")
        
    } else {
        bodyEl.classList.toggle("dark")
        header.style.setProperty("border-bottom", "0.1px black solid")
        img.setAttribute("src", "images/byui-logo-blue.webp")
    }
}
)