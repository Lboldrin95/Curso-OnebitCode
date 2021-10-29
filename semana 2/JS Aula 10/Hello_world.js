alert("Bem-vindo! A seguir pediremos que informe alguns dados... ")
let Name = prompt ("Qual é o seu nome? ")
let Age = prompt ("Qual é a sua idade? ")

let  ageConfirmation = confirm("sua idade é " + Age + " anos" )

alert(
    "Nome do usuário: " + Name + "\n\nIdade: " + Age +"\n\nIdade Confirmada: " + ageConfirmation
    )