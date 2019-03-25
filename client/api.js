import request from 'superagent'

const apod = "https://api.nasa.gov/planetary/apod?api_key=UQFDU8qGbafUolXayLU0J4Xwtu2T5rrQn8ztn8Fg"

const marsRoverSpiritData = "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1900&camera=NAVCAM&api_key=UQFDU8qGbafUolXayLU0J4Xwtu2T5rrQn8ztn8Fg"

const marsRoverCuriosityData = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-03-16&api_key=UQFDU8qGbafUolXayLU0J4Xwtu2T5rrQn8ztn8Fg"

const mercuryAPI = "http://localhost:3000/mercury"

export function getInfo () {
  return (
    request.get(`${apod}`)
    .then(apodres => {
      return apodres.body
  }))
}

export function marsRoverSpirit () {
  return (
    request.get(`${marsRoverSpiritData}`)
    .then(marsRoverRes => {
      return marsRoverRes.body
    }))
}

export function marsRoverCuriosity () {
  return (
    request.get(`${marsRoverCuriosityData}`)
    .then(marsCuriosityRes => {
      return marsCuriosityRes.body
    }))
}

export function mercuryRetrograde () {
  return request
    .get(`${mercuryAPI}`)
    .then(mercuryRes => {
      return mercuryRes.body
    })
}




