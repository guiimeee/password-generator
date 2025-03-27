let sizePassword = document.querySelector('#valor')
let sliderElement = document.querySelector('#slider')
let button = document.querySelector('#button')

let container = document.querySelector('.generated-password')
let password = document.querySelector('#password')

let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/.,:;{}[]|\\`~ '

let novaSenha = ''

sizePassword.innerText = sliderElement.value

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value
}

button.addEventListener('click', function generatePassword() {
    let pass = ""

    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    container.classList.remove('hide')
    password.innerText = pass
    novaSenha = pass
})

password.addEventListener('click', () => {
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
})