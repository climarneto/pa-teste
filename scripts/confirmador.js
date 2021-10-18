/* 
 * Confirmar a Esclusao de um contato
 * Autor: Climar Neto
 * @param id
 */
function confirmarReserva() {
    let resposta = confirm("Confirma a RESERVA?")
    if(resposta ==true){
        alert('Reserva será enviada para o e-mail cadastrado na Alternativa Internet.')
        window.window.location.href = ""
    } else {
    }
}


