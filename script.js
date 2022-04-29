const element = document.getElementsByClassName("coming-soon")

Array.from(element).forEach((element) => {
    console.log(element);
    element.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementsByClassName("modal")[0].classList.add("active");
    })
})

const modal = document.querySelector(".modal button");

modal.addEventListener("click", (event) => {
    if (event.target.parentElement.parentElement.classList.contains("active")) {
        document.querySelector(".modal").classList.remove("active");
    }
})