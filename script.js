var nameInput = window.document.getElementById('name')
var nameResult = window.document.getElementById('name-result')

var ageInput = window.document.getElementById('age')
var ageResult = window.document.getElementById('age-result')

var skillsInput = window.document.getElementById('skills')
var skillsResult = window.document.getElementById('skills-result')

var submit = window.document.getElementById('submit')

submit.addEventListener('click', enviar)

function enviar() {
    var registrado = window.document.getElementsByClassName('section-title')[1]
    registrado.innerText = 'Usuário registrado!'
    
    var nameField = window.document.getElementById('name-field')
    var nameUser = String(nameInput.value)
    nameResult.innerText = `${nameUser}`
    nameField.innerText = 'Nome:'

    var ageField = window.document.getElementById('age-field')
    var ageUser = String(ageInput.value)
    ageResult.innerText = `${ageUser}`
    ageField.innerText = 'Idade:'

    var skillsField = window.document.getElementById('skills-field')
    var skillsUser = String(skillsInput.value)
    skillsResult.innerText = `${skillsUser}`
    skillsField.innerText = 'Skills:'
}