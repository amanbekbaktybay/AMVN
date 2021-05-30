let timer;

let links = document.getElementsByClassName("header__nav-link")

for (let i = 0; i < links.length; i++){
    links[i].onclick = showBurger
}

let closeArea = document.getElementsByClassName("disabled-area")[0]
closeArea.onclick = showBurger



function showBurger(){
    let burgerBlock = document.getElementById("burger")

    if (burgerBlock.classList.contains("burger-active"))
    {
        closeArea.classList.remove("disabled-area-activ")

        clearTimeout(timer)
        timer = setTimeout(()=>{
        burgerBlock.style.display = "none"
        },500)
        document.getElementsByClassName("header__burger-icon")[0].style.color = "#fff"
        burgerBlock.classList.remove("burger-active")
    }
    else
    {
        clearTimeout(timer)
        burgerBlock.style.display = "block"
        closeArea.classList.add("disabled-area-activ")

        timer = setTimeout(()=>{
            document.getElementsByClassName("header__burger-icon")[0].style.color = "#0077b6"
            burgerBlock.classList.add("burger-active")
        },10)
    }
}




