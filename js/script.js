const form = document.querySelector(".main__qustionForm_form") //поиск по селектору
// console.log(form);
function formSubmit(event){
    event.preventDefault() // сброс настроек отправки формы
    // const form = event.target
    // console.dir(form);
    
}

form.addEventListener("submit", formSubmit ) //слушатель события при отправке формы