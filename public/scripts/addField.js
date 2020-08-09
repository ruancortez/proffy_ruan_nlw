// Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener("click", cloneField) 
//Executar uma acao
function cloneField() {
    //Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true or false
    
    //limpar os campos: Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //Para cada campo limpar
    fields.forEach(function(field) {
        //pegar o field do momento

        console.log(field)
            //pegar o field do momento e limpa ele
            field.value = ""
    })


    //Colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}