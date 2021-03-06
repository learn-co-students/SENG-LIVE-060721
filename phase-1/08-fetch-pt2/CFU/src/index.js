//Fetch calls *****************
function updateAnimals(e, data){
  data.donations = data.donations+10

  fetch(`http://localhost:3000/animals/${data.id}`,{
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
  // document.getElementById(data.id).querySelector('.donation-count').textContent = data.donations
    console.log(e.target.parentNode.parentNode.children[1].children[1].children[0].textContent = data.donations)
    console.log(data)
  })
}
// Event Handlers *****************

// Event Listeners ****************
 
// Render *********************
//This function takes an animal as an argument and renders it to the dom
function renderOneAnimal(animalObj) {
    const card = document.createElement("li")
    const btnDonate = document.createElement("button")
    const btnDelete = document.createElement("button")

    btnDonate.textContent = 'Donate'
    btnDelete.textContent = 'Delete'

    btnDonate.addEventListener('click',e => {
      updateAnimals(e, animalObj)
    })

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
    `;

    card.querySelector('.buttons').append(btnDonate, btnDelete)
    document.querySelector("#animal-list").append(card);
  }
  
 
 // Initial Render *************
 function initialize() {
   fetch('http://localhost:3000/animals')
   .then(resp => resp.json())
   .then(data => {
     console.log(data)
     //the return will pass the data to the next function
    return data
    })
   .then(data => data.forEach(renderOneAnimal))
    document.querySelector('.card').remove()
   
 }
  initialize()
 
// [x] GET: Make a fetch for every animal and build an animal card using renderOneAnimal

// [x] PATCH: Add an event to the donate button that will increase the donation amount += 10, the donation amount should persis past page refresh and be updated pessimistically. 

// DELETE: Add an event to the delete button that will delete the animal, the animal deletion should persist past page refresh.
// Add a new animal to the list using the form.  
// Bonus 
// POST: The animal should persist past page refresh. 
