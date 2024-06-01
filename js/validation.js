function validation (inp, submit, inputs){
    const errMessage = inp.nextElementSibling  //Следующий элемент после импута в одном контейцнере
    if(inp.validity.patternMismatch){    // Проверка на соответствие патерна ( шаблона текста )
        errMessage.textContent = errMessage.getAttribute('data-error-pattern')
    }else if(inp.validity.tooLong || inp.validity.tooShort){
        errMessage.textContent = errMessage.getAttribute('data-error-length')
    }
    else if(inp.validity.valueMissing){   //если импут пустой 
        errMessage.textContent = "Это поле не должно быть пустым"
    }else{    
        errMessage.textContent = ""
    }
//  console.dir(inp.validity)  //???
    submit.disabled = !Array.from(inputs).every(inp => inp.validity.valid)  // проверяем все инпуты на валидность. 
}

export function enableValidation(selectorInput, selectorSubmit){
    const inputs = document.querySelectorAll(selectorInput)
    const submit = document.querySelector(selectorSubmit)
    inputs.forEach( (inp) => inp.addEventListener("input", () => validation (inp, submit, inputs)))
}