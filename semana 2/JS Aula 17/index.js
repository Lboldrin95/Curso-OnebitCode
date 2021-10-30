let spaceship = "Elemental"
let velocity = 20

//console.log(spaceship.length == 9 && velocity > 15)
// V e V = True

//console.log(velocity > 10 && velocity < 19)
// V e F = False

//console.log(velocity < 17 && spaceship == "Elemental")
// F e V = False

//console.log(spaceship == "Golias" && velocity > 21)
// F e F = False

//Essa é a tabela verdade do &&

//console.log(spaceship.length = 9 || velocity > 15)
// V ou V = True

//console.log (velocity > 10 || velocity < 19 )
// V ou F = True

//console;log(velocity < 17 || spaceship == "Elemental")
// F ou V = True

//console.log(spaceship == "Golias" || velocity > 21)
// F ou F = False

//console.log(!(velocity > 19))
// Nâo V = False

//console.log(!(spaceship == "Golias"))
// Não F = True

console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15) )
//console.log(!(velocity > 25 && spaceship == "Elemental") || (17 == 17 && 10 > 15) )

//(!F || F)
// V || F
// V