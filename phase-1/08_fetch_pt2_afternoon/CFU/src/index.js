//Fetch calls *****************

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
  
   
 }
  initialize()
 
// GET: Make a fetch for every animal and build an animal card using renderOneAnimal

// PATCH: Add an event to the donate button that will increase the donation amount += 10, the donation amount should persis past page refresh and be updated pessimistically. 

// DELETE: Add an event to the delete button that will delete the animal, the animal deletion should persist past page refresh.
// Add a new animal to the list using the form.  
// Bonus 
// POST: The animal should persist past page refresh. 
