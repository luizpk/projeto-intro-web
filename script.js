
console.log("Cavaleiros de Bronze - Saga Santuário")

let seiya = {
        Nome: "Seiya", 
        Classe:"Cavaleiro de Bronze",
        Armadura: "Armadura de Pégasus",
        Constelação:"Pégasus",
        Divindade: "Atena",
        Sexo: "Masculino",
        Idade: 13 ,
        Técnicas: ["Meteoro de Pégaso", "Cometa de Pégaso", "Turbilhão de Pégaso"],
        Santuário: true
}

let shun = {
        Nome: "Shun", 
        Classe: "Cavaleiro de Bronze",
        Armadura: "Armadura de Andrômeda",
        Constelação: "Andrômeda",
        Divindade: "Atena",
        Sexo: "Masculino",
        Idade: 13, 
        Técnicas: ["Corrente de Andrômeda", "Nebulosa de Andrômeda", "Onda Relâmpago", "Defesa Circular", "Corrente Nebulosa", "Tempestade Nebulosa", "Teia de Aranha de Andrômeda", "Rede de Andrômeda", "Espiral de Andrômeda", "Bumerang de Andrômeda", "Armadilha de ANdrômeda"],
        Santuário: true
}

let shiryu = {
        Nome: "Shiryu", 
        Classe: "Cavaleiro de Bronze",
        Armadura: "Armadura de Dragão",
        Constelação: "Dragão",
        Divindade: "Atena",
        Sexo: "Masculino",
        Idade: 14,  
        Técnicas: ["Cólera do Dragão", "Dragão Voador", "Último Dragão", "Harmonia da Natureza", "Cólera dos Cem Dragões", "Excalibur"],
        Santuário: true
}

let hyoga = {
        Nome: "Hyoga", 
        Classe: "Cavaleiro de Bronze",
        Armadura: "Armadura de Cisne",
        Constelação: "Cisne",
        Divindade: "Atena",
        Sexo: "Masculino",
        Idade: 14,
        Técnicas: ["Pó de Diamante", "Círculo de Gelo", "Trovão Aurora", "Golpe Congelante", "Turbilhão de Gelo", "Esquife de Gelo", "Execução Aurora"],
        Santuário: true
}

let ikki = {
        Nome: "Ikki", 
        Classe: "Cavaleiro de Bronze",
        Armadura: "Armadura de Fenix",
        Constelação: "Fenix",
        Divindade: "Atena",
        Sexo: "Masculino",
        Idade: 15  ,
        Técnicas: ["Ave Fenix","Golpe Fantasma de Fenix"],
        Santuário: true
}

const cavaleirosBronze = []
//cavaleirosBronze.push(seya,shun,shiryu,hyoga,ikki)

if(seiya.Santuário){
   cavaleirosBronze.push(seiya)
}else{
    alert("O objeto não foi adicionado à lista.")
}

if(shun.Santuário){
    cavaleirosBronze.push(shun)
 }else{
     alert("O objeto não foi adicionado à lista.")
 }
 
 if(shiryu.Santuário){
    cavaleirosBronze.push(shiryu)
 }else{
     alert("O objeto não foi adicionado à lista.")
 }
 
 if(hyoga.Santuário){
    cavaleirosBronze.push(hyoga)
 }else{
     alert("O objeto não foi adicionado à lista.")
 }

 if(ikki.Santuário){
    cavaleirosBronze.push(ikki)
 }else{
     alert("O objeto não foi adicionado à lista.")
 }
 
 //console.log(cavaleirosBronze)
 


const mediaIdade = (seiya.Idade+shun.Idade+shiryu.Idade+hyoga.Idade+ikki.Idade)/5
const sagaSantuário = (seiya.Santuário&&shun.Santuário&&shiryu.Santuário&&hyoga.Santuário&&ikki.Santuário)

//semana 3

for(let tecnicas of cavaleirosBronze){
    tecnicas.Técnicas=tecnicas.Técnicas.join(", ")
}

//console.log(cavaleirosBronze)

function relatorioTodosCavaleiros(){
   for(cavaleiro of cavaleirosBronze){
       for (propriedade in cavaleiro){
         console.log(`${propriedade}: ${cavaleiro[propriedade]}`)
      }
     console.log("---------------------------")
     console.log(`A média de idade dos Cavaleiros é: ${mediaIdade}`)
console.log(`Todos participaram da Saga Santuário? ${sagaSantuário}`)
  }
}

function fichaCavaleiro(cavaleiro){
        for (propriedade in cavaleiro){
            console.log(`${propriedade}: ${cavaleiro[propriedade]}`)
        }
}

function pesquisaCavaleiros(busca,cavaleirosBronze){
    let input = document.getElementById('pesquisa').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('cavaleiro');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

//pesquisaCavaleiros("shun",cavaleirosBronze)


         //trocar              trocar por class        
const insereSeiya = document.getElementById("listaSeiya")
insereSeiya.innerHTML = ""
insereSeiya.innerHTML += "<li> <strong>Nome:</strong> Seiya <li>"
insereSeiya.innerHTML += "<li> <strong>Classe:</strong> Cavaleiro de Bronze <li>"
insereSeiya.innerHTML += "<li> <strong>Armadura:</strong> Armadura de Pégasus<li>"
insereSeiya.innerHTML += "<li><strong>Constelação:</strong> Pégasus <li>"
insereSeiya.innerHTML += "<li><strong>Divindade:</strong> Atena<li>"
insereSeiya.innerHTML += "<li><strong>Sexo:</strong> Masculino<li>"
insereSeiya.innerHTML += "<li><strong>Idade:</strong> 13<li>"
insereSeiya.innerHTML += "<li><strong>Técnicas</strong>: Meteoro de Pégaso, Cometa de Pégaso, Turbilhão de Pégaso<li>"

const insereShun = document.getElementById("listaShun")
insereShun.innerHTML = ""
insereShun.innerHTML += "<li> <strong>Nome:</strong> Shun <li>"
insereShun.innerHTML += "<li> <strong>Classe:</strong> Cavaleiro de Bronze <li>"
insereShun.innerHTML += "<li> <strong>Armadura:</strong> Armadura de Andrômeda<li>"
insereShun.innerHTML += "<li><strong>Constelação:</strong> Andrômeda <li>"
insereShun.innerHTML += "<li><strong>Divindade:</strong> Atena<li>"
insereShun.innerHTML += "<li><strong>Sexo:</strong> Masculino<li>"
insereShun.innerHTML += "<li><strong>Idade:</strong> 13<li>"
insereShun.innerHTML += "<li><strong>Técnicas</strong>: Corrente de Andrômeda, Nebulosa de Andrômeda, Onda Relâmpago, Defesa Circular, Corrente Nebulosa, Tempestade Nebulosa, Teia de Aranha de Andrômeda, Rede de Andrômeda, Espiral de Andrômeda, Bumerang de Andrômeda, Armadilha de Andrômeda<li>"

const insereShiryu = document.getElementById("listaShiryu")
insereShiryu.innerHTML = ""
insereShiryu.innerHTML += "<li> <strong>Nome:</strong> Shiryu <li>"
insereShiryu.innerHTML += "<li> <strong>Classe:</strong> Cavaleiro de Bronze <li>"
insereShiryu.innerHTML += "<li> <strong>Armadura:</strong> Armadura de Dragão<li>"
insereShiryu.innerHTML += "<li><strong>Constelação:</strong> Dragão <li>"
insereShiryu.innerHTML += "<li><strong>Divindade:</strong> Atena<li>"
insereShiryu.innerHTML += "<li><strong>Sexo:</strong> Masculino<li>"
insereShiryu.innerHTML += "<li><strong>Idade:</strong> 14<li>"
insereShiryu.innerHTML += "<li><strong>Técnicas</strong>: Cólera do Dragão, Dragão Voador, Último Dragão, Harmonia da Natureza, Cólera dos Cem Dragões, Excalibur<li>"

const insereHyoga = document.getElementById("listaHyoga")
insereHyoga.innerHTML = ""
insereHyoga.innerHTML += "<li> <strong>Nome:</strong> Hyoga <li>"
insereHyoga.innerHTML += "<li> <strong>Classe:</strong> Cavaleiro de Bronze <li>"
insereHyoga.innerHTML += "<li> <strong>Armadura:</strong> Armadura de Cisneo<li>"
insereHyoga.innerHTML += "<li><strong>Constelação:</strong> Cisne <li>"
insereHyoga.innerHTML += "<li><strong>Divindade:</strong> Atena<li>"
insereHyoga.innerHTML += "<li><strong>Sexo:</strong> Masculino<li>"
insereHyoga.innerHTML += "<li><strong>Idade:</strong> 14<li>"
insereHyoga.innerHTML += "<li><strong>Técnicas</strong>: Pó de Diamante, Círculo de Gelo, Trovão Aurora, Golpe Congelante, Turbilhão de Gelo, Esquife de Gelo, Execução Aurora<li>"

const insereIkki = document.getElementById("listaIkki")
insereIkki.innerHTML = ""
insereIkki.innerHTML += "<li> <strong>Nome:</strong> Ikki <li>"
insereIkki.innerHTML += "<li> <strong>Classe:</strong> Cavaleiro de Bronze <li>"
insereIkki.innerHTML += "<li> <strong>Armadura:</strong> Armadura de Fenix<li>"
insereIkki.innerHTML += "<li><strong>Constelação:</strong> Fenix <li>"
insereIkki.innerHTML += "<li><strong>Divindade:</strong> Atena<li>"
insereIkki.innerHTML += "<li><strong>Sexo:</strong> Masculino<li>"
insereIkki.innerHTML += "<li><strong>Idade:</strong> 15<li>"
insereIkki.innerHTML += "<li><strong>Técnicas</strong>: Ave Fenix, Golpe Fantasma de Fenix<li>"
