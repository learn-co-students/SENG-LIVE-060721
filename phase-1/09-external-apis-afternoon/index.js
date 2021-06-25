document.querySelector('form')
.addEventListener('submit', youtubeSearch)

const API_KEY = ''

function youtubeSearch(e){
    e.preventDefault()
    let search = e.target.search.value
    document.querySelector('form').reset()
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search}&type=video&videoDefinition=any&publishedAfter=2010-01-01T00:00:00Z&key=${API_KEY}`)
    .then(res => res.json())
    .then(video => {
        console.log(video)
        buildVideo(video.items[0])
        document.querySelector('aside').innerHTML = ''
        video.items.forEach(buildAside)
    })
    .catch(error => console.log(error))
}

function buildVideo(video){
    let main = document.querySelector('main')
    let iframe = document.createElement('iframe')
    let info_container = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    main.innerHTML = ''
    main.id = 'main_video'
    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
    iframe.style.width = '800px'
    iframe.style.height = '500px'
    h1.innerText = video.snippet.title
    p.innerText = video.snippet.description
    info_container.id = 'info_container'
    info_container.append(h1,p)
    main.append(iframe,info_container)
}

function buildAside(video){
    let div = document.createElement('div')
    let img = document.createElement('img')
    div.className = 'aside_videos'
    img.src = video.snippet.thumbnails.default.url
    div.appendChild(img)
    div.addEventListener('click',() => buildVideo(video) )
    document.querySelector('aside').appendChild(div)
}

document.querySelector('aside').classList.remove('new_class')

// fetch(`https://pokeapi.co/api/v2/pokemon/butterfree/`)
// .then((resp) => resp.json())
// .then((pokemon) => console.log(pokemon))

// fetch(`https://swapi.dev/api/planets/1/?format=wookiee`)
//  .then((res) => res.json())
//  .then((planets) => console.log(planets));

 
//  fetch(`https://swapi.dev/api/people`)
//  .then((res) => res.json())
//  .then((people) => console.log(people))
 
//  fetch('https://swapi.dev/api/starships')
// .then((resp) => resp.json())
// .then((starships) => console.log(starships))

