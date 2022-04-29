const element = document.getElementsByClassName("coming-soon")
const modal = document.getElementsByClassName("modal")[0];

Array.from(element).forEach((element) => {
    console.log(element);
    element.addEventListener("click", (event) => {
        event.preventDefault();
        modal.classList.add("active");
        setTimeout(() => {
            modal.classList.add("visible");
        }, 100)
    })
})

modal.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.innerText == "X") {
        modal.classList.remove("visible");
        setTimeout(() => {
            modal.classList.remove("active");
        }, 350);
    }
})