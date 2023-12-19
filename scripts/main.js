const KeyApi = "e49f3301eec8b05cd4c34e7ae19165e5"

function populartela(dados) {
        if (dados.cod == 200) {
            document.querySelector(".titulo-cidade").innerHTML = "Tempo em " + dados.name
            document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
            document.querySelector(".titulo-status-tempo").innerHTML = dados.weather[0].description
            document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
            document.querySelector(".img-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    } else {
        document.querySelector(".titulo-cidade").innerHTML = "Cidade não encontrada!"
        document.querySelector(".temperatura").innerHTML = "0°C"
        document.querySelector(".titulo-status-tempo").innerHTML = "Sem informação!"
        document.querySelector(".umidade").innerHTML = "Umidade: 0%"
        document.querySelector(".img-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
    }
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${KeyApi}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    populartela(dados)  
}

function pesquisar() {
    const cidade = document.querySelector(".inome-cidade").value   
    buscarCidade(cidade) 
}
