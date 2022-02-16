var nome = window.prompt("Seja bem vindo, qual seu nome ?")

function  firstContent() {
   

    if(nome != null) {
       var nomeM = "Seja bem vindo(a) " + nome + "!";
        document.getElementById("bem-vindo").innerHTML = nomeM;
    }else if(nome == null) {
        document.getElementById("sem-nome").innerHTML = "Você não inseriu seu nome !"
    }



    document.getElementById('nome').innerHTML = "Então " +  nome + ","
  // SECOND-CONTENT


}


function secondContent (){

    

    var idade = window.document.getElementById('box-textidd').value
    var lp = window.document.getElementById('box-textpr').value


    document.getElementById('nome-second').innerHTML = "Legal, " + nome + " !"
    document.getElementById('idade-second').innerHTML = "Você tem " + idade + " anos !"
    document.getElementById('linguagem-programacao').innerHTML = "Você esta aprendendo " + lp + ", espero que goste !"
    
    let divfooter = document.getElementById('footer-second')

    divfooter.style.display = "flex";

    let infS = document.getElementById('info-second')

    infS.style.display = "flex"

    let princ = document.getElementById('info-user')

    princ.style.display = "none"
}
