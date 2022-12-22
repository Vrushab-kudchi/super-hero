function randomno() {
  let numb = Math.floor(Math.random() * 731);
  return numb;
}

function getheroo() {
  let numb = randomno();
  fetch(`https://superheroapi.com/api.php/1353280515431405/${numb}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let putHero = document.getElementById("puthero")
      putHero.src = `${data.image.url}`
      document.getElementById('heroname').innerText = `Name: ${data.name}`
      document.getElementById('combat').innerText = `Combat: ${data.powerstats.combat}`
      document.getElementById('intelligence').innerText = `Intelligence: ${data.powerstats.intelligence}`
      document.getElementById('speed').innerText = `Speed: ${data.powerstats.speed}`
      document.getElementById('durability').innerText = `Durability: ${data.powerstats.durability}`
      document.getElementById('power').innerText = `Power: ${data.powerstats.power}`
      document.getElementById('strength').innerText = `Strength: ${data.powerstats.strength}`
    });
}


function searchHero() {
  let search = document.getElementById("search-hero").value
  fetch(`https://superheroapi.com/api.php/1353280515431405/search/${search}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let putHero = document.getElementById("puthero")
      putHero.src = `${data.results[0].image.url}`
      document.getElementById('heroname').innerText = `Name: ${data.results[0].name}`
      document.getElementById('combat').innerText = `Combat: ${data.results[0].powerstats.combat}`
      document.getElementById('intelligence').innerText = `Intelligence: ${data.results[0].powerstats.intelligence}`
      document.getElementById('speed').innerText = `Speed: ${data.results[0].powerstats.speed}`
      document.getElementById('durability').innerText = `Durability: ${data.results[0].powerstats.durability}`
      document.getElementById('power').innerText = `Power: ${data.results[0].powerstats.power}`
      document.getElementById('strength').innerText = `Strength: ${data.results[0].powerstats.strength}`
    });
}
