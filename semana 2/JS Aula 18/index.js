let velocity = prompt("Qual a velocidade desejada?") 

if(velocity < 101) {
    console.log("Estamos numa velocidade aceitável")
    } else 
        { if(velocity <=110) {
            console.log("Cuidado! Próximo a velocidade de risco.")
        }   else {
                console.log("Entrando em velocidade risco")
        }        
}

