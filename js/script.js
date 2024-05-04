const form = document.querySelector(".main__qustionForm_form") //поиск по селектору
const cards = document.querySelectorAll(".main__services .main__services_cart")
const modal = document.querySelector(".overlay")
// console.log(form);
function formSubmit(event){
    event.preventDefault() // сброс настроек отправки формы
    // const form = event.target
    // console.dir(form);
    
}



function eventCard (event){
    const card = event.currentTarget
    modal.classList.remove("hidden")    
    const titleText = card.querySelector(".main__services_cart-title").textContent
    const buttonText = card.querySelector(".main__services_cart-price").textContent
    const pText = card.querySelector(".main__services_cart-text").textContent
    const modalTitle = modal.querySelector(".main__services_cart-title")
    const modalBtn = modal.querySelector(".main__services_cart-price")
    const modalText = modal.querySelector(".main__services_cart-text")
    modalTitle.textContent = titleText
    modalBtn.textContent = buttonText
    modalText.textContent = pText
    modalBtn.classList.add("main__services_cart-price-open")
}

cards.forEach((card) => card.addEventListener("click", eventCard ))
form.addEventListener("submit", formSubmit ) //слушатель события при отправке формы
modal.addEventListener("click", (e) => {
    if(e.target.classList.contains('overlay')){
        modal.classList.add("hidden")
    }
})


// оформить текст в карточка в соотвтествии с макетом
// текст не должен быты отображен в карточках
// настроить передачу текста карточки в модально окно при клике
