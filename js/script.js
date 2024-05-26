const form = document.querySelector(".main__qustionForm_form") //поиск по селектору
const cards = document.querySelectorAll(".main__services .main__services_cart") // записали в переменую все карточки товара
const slideConteiner = document.querySelector(".main__promise_title")     // получили блок во всеми заголовками
const modal = document.querySelector(".overlay") // получили скрытое окно карточки
const mainBtn = document.querySelector(".main__button") // получиди кнопку стрелки вниз в верху
const conteinerCard = document.querySelector(".main__services") // блок со всеми карточками
const discussionBtn = document.querySelector(".main__discussion_button") // кнопка обсуждения
const qustionForm = document.querySelector(".main__qustionForm") // блок с формами

let count = 0
// console.dir(qustionForm)

function formSubmit(event){ // функция работы с кнопкой 
    event.preventDefault() // сброс настроек отправки формы
    const form = event.target // форма - цель события
    const obj = {  // создаем обьекст с данными из формы 
        name : form.elements.name.value,   // записываем записаное внутри  импута с именем нэйм
        contacts : form.elements.contact.value,
        question : form.elements.question.value
    }
    form.reset()  // отчистка формы после нажатия на кнопку 
    console.log(obj);
    
}

function sliderScroll (count) {  // функция скрола (перемотки) 
    slideConteiner.scroll({  // применяем метод скролл для определения свойств перемотки
        top: 50 * count,  // указывваем сколько пикселей бедет переметывать с каждым шагом перемотки по вертикали 
        left: 0,   // указываем сколько перематывает по горизонтали
        behavior: "smooth" // вид перемотки плавная 
    })
}

setInterval(() => {  // фстроеная функция запуска чего либо по времени
   count < 3 ? count ++ : count = 0  // проверка и увелечения счетчика прокрутки скролла
   sliderScroll(count) // запуск функции скрола
}, 3000) // время через которое будет запускать функцию скролла

function eventCard (event){
    const card = event.currentTarget
    if(outerWidth > 500){ // если разрешение экрана больше 500 то работает все с карточками как обычно, вылазит окно поверх всего 
        modal.classList.remove("hidden")    
        const titleText = card.querySelector(".main__services_cart-title").innerHTML
        const buttonText = card.querySelector(".main__services_cart-price").textContent
        const pText = card.querySelector(".main__services_cart-text").textContent
        const modalTitle = modal.querySelector(".main__services_cart-title")
        const modalBtn = modal.querySelector(".main__services_cart-price")
        const modalText = modal.querySelector(".main__services_cart-text")
        modalTitle.innerHTML = titleText
        modalBtn.textContent = buttonText
        modalText.textContent = pText
        modalBtn.classList.add("main__services_cart-price-open")
    }else{ // если экран меньше 500 то карточка просто раскрывается и показыввает текс 
        const cardText = card.querySelector('.main__services_cart-text') // получаем текст из карточки, который был скрыт минимальной высотой 
        cardText.classList.toggle("hidden_text") // заменяем клас текста карточки, что бы он открылся 
        const iconOpen = card.querySelector(".main__services_iconOpen") // получаем иконку скрытия карточки
        iconOpen.classList.toggle("icon_close") // переворачиваем иконку 
    }
    console.dir(window)
}

cards.forEach((card) => card.addEventListener("click", eventCard ))
form.addEventListener("submit", formSubmit ) //слушатель события при отправке формы
modal.addEventListener("click", (e) => {
    if(e.target.classList.contains('overlay')){
        modal.classList.add("hidden")
    }
})
mainBtn.addEventListener("click", () => {  // вешаем слушатель события при клике на кнопку в меню, скролим экран вниз к карточкам 
    window.scroll({
        top: conteinerCard.offsetTop - 50, // обращаемся к высоте блока карточек через свойства виндоув
        behavior: "smooth"
    })
})
discussionBtn.addEventListener("click", () => { // скролим экран вниз к форме
    window.scroll({
        top: qustionForm.offsetTop - 50, 
        behavior: "smooth"
    })
})

// оформить текст в карточка в соотвтествии с макетом
// текст не должен быты отображен в карточках
// настроить передачу текста карточки в модально окно при клике
