export function windowScroll (el){
    window.scroll({
        top: el.offsetTop - 50, 
        behavior: "smooth"
    })
}

export function sliderScroll (count, slideConteiner) {  // функция скрола (перемотки) 
    slideConteiner.scroll({  // применяем метод скролл для определения свойств перемотки
        top: 50 * count,  // указывваем сколько пикселей бедет переметывать с каждым шагом перемотки по вертикали 
        left: 0,   // указываем сколько перематывает по горизонтали
        behavior: "smooth" // вид перемотки плавная 
    })
}