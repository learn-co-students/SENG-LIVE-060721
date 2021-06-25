document.addEventListener('DOMContentLoaded',() => {
  getPups()
})

const getPups = () => {
  fetch('http://localhost:3000/pups')
  .then(res => res.json())
  .then(pups => {
    renderPups(pups)
    const dogFilter = document.querySelector('#good-dog-filter')
    dogFilter.addEventListener('click', (e) => filterPups(e,pups))
  })
}

const renderPups = (pups) => {
  document.querySelector('#dog-bar').innerHTML = ''
  pups.forEach(renderPupTile)
}

const filterPups = (e,pups) => {
  if(e.target.innerText === "Filter good dogs: OFF"){
    e.target.innerText = "Filter good dogs: ON"
    const goodPups = pups.filter(pup => pup.isGoodDog)
    renderPups(goodPups)
  }else{
    e.target.innerText = "Filter good dogs: OFF"
    renderPups(pups)
  }
}


const renderPupTile = (pup) => {
  const pupName = document.createElement('span')
  pupName.innerText = pup.name
  pupName.addEventListener('click',() => {
    renderPupInfo(pup)
  })

  const dogBar = document.querySelector('#dog-bar')
  dogBar.append(pupName)
}

const renderPupInfo = (pup) => {
  const pupImage = document.createElement('img')
  pupImage.src = pup.image

  const pupName = document.createElement('h2')
  pupName.innerText = pup.name

  const isGoodDogBtn = document.createElement('button')
  isGoodDogBtn.innerText = pup.isGoodDog ? "Good Dog!" : "Bad Dog!"
  isGoodDogBtn.addEventListener('click',(e) => toggleGoodDog(e,pup))

  const dogInfo = document.querySelector('#dog-info')
  dogInfo.innerHTML = ''
  dogInfo.append(pupImage,pupName,isGoodDogBtn)
}

const toggleGoodDog = (e,pup) => {
  // if(e.target.innerText === 'Good Dog!'){
  //   e.target.innerText = 'Bad Dog!'
  // }else{
  //   e.target.innerText = 'Good Dog!'
  // }

  fetch(`http://localhost:3000/pups/${pup.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({ isGoodDog: !pup.isGoodDog })
  })
  .then(res => res.json())
  .then(updatedPupObj => {
    if(updatedPupObj.isGoodDog === true){
      e.target.innerText = 'Good Dog!'
    }else{
      e.target.innerText = 'Bad Dog!'
    }
  })
}
