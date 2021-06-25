document.querySelector('form').addEventListener('submit', youtubeSearch)

const API_KEY = ''


function youtubeSearch(e){
    e.preventDefault()
    let searchTerm = e.target.search.value
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${searchTerm}&type=video&maxResults=5&videoDefinition=any&key=${API_KEY}`)
    .then(res => res.json())
    .then(videoObj => {
        videoObj.items.forEach(video => buildAside(video))
        buildVideo(videoObj.items[0])
    })
}

function buildVideo(video){
    console.log(video)
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
    console.log(video.snippet.thumbnails.default.url)
    let div = document.createElement('div')
    let img = document.createElement('img')
    div.className = 'aside_videos'
    img.src = video.snippet.thumbnails.default.url
    div.appendChild(img)
    div.addEventListener('click',() => buildVideo(video) )
    document.querySelector('aside').appendChild(div)
}

document.querySelector('aside').classList.remove('new_class')


//Free pokemon api
// function getPokemon(){
//     fetch('https://pokeapi.co/api/v2/pokemon/butterfree/')
//     .then(res => res.json())
//     .then(console.log)
//     // .then(data => console.log(data))
// }
// getPokemon()

// 

// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding%20dog&type=video&videoDefinition=high&key=[YOUR_API_KEY]' 
