//Fetch calls *****************
function patchAnimal(animalObj,span){
  fetch(`http://localhost:3000/animals/${animalObj.id}`,{
    method:'PATCH',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(animalObj)
  })
  .then(res => res.json())
  .then(data => span.textContent = data.donations)
}

// Event Handlers *****************
function makeAnimal(e){
  e.preventDefault()
  console.log(e.target.name.value)
  console.log(e.target.image_url.value)
  console.log(e.target.description.value)

  let animalObj = {
    name: e.target.name.value,
    imageUrl: e.target.image_url.value,
    description: e.target.description.value,
    donations:0
  }
  //renderOneAnimal(animalObj)
  
  fetch('http://localhost:3000/animals',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(animalObj)
  })
  .then(res => res.json())
  .then(data => renderOneAnimal(data))

}

// Event Listeners ****************
document.querySelector('#animal-form').addEventListener('submit', makeAnimal)
 
// Render *********************
//This function takes an animal as an argument and renders it to the dom
function renderOneAnimal(animalObj) {
    console.log(animalObj)
    const card = document.createElement("li")
    const btnDonate = document.createElement("button")
    const btnDelete = document.createElement("button")

    btnDonate.textContent = 'Donate '
    btnDelete.textContent = 'Delete'

    card.className = "card"
    card.id = animalObj.id
  
    card.innerHTML = `
    <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
    <div class="content">
      <h4>${animalObj.name}</h4>
      <p>
        $<span class="donation-count">${animalObj.donations}</span> Donated
      </p>
      <p>${animalObj.description}</p>
    </div>
    <div class="buttons">
    </div>
    `


    btnDonate.addEventListener('click',(e) => {
      let span = card.querySelector('span')
      animalObj.donations+=10
      // span.textContent = animalObj.donations
      patchAnimal(animalObj,span)
    })

    card.querySelector('.buttons').append(btnDonate, btnDelete)
    document.querySelector("#animal-list").append(card);
  }
  
 
 // Initial Render *************
 function initialize() {
  document.querySelector('.card').remove()
  fetch('http://localhost:3000/animals')
  .then(res => res.json())
  .then(data => data.forEach(renderOneAnimal))
 }
  initialize()
 
// [x] GET: Make a fetch for every animal and build an animal card using renderOneAnimal

// PATCH: Add an event to the donate button that will increase the donation amount += 10, the donation amount should persis past page refresh. 

// Bonus 
// DELETE: Add an event to the delete button that will delete the animal, the animal deletion should persist past page refresh.
// Add a new animal to the list using the form.  
// POST: The animal should persist past page refresh. 
