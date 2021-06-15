//Events  Listeners
document.querySelectorAll('#navigation li')[0]
.addEventListener('click', renderForm)

document.querySelectorAll('#navigation li')[1]
.addEventListener('click',renderList)

document.querySelector('#book-form')
.addEventListener('submit', handleSubmit)

//Event Handlers
//Submit handler
function handleSubmit(event){
    event.preventDefault()
    console.log(event)
    let book = {
        storeId:1,
        title: event.target.title.value,
        author: event.target.author.value,
        image_url: event.target.image_url.value,
        reviews: [],
        inventory: 0
    }
    //buildOneBook(book)
    renderList()
    postBook(book)
    event.target.reset()
    //Render the new book at the top of our list
    //Render all of our books
}


//is pass the event
function renderForm(event){
    console.log(event.target)
    document.querySelector('#book-form').style.display = 'flex'
    document.querySelector('#book-list').style.display = 'none'
}
//Don't need to pass the event if you're not using it
function renderList(){
    document.querySelector('#book-form').style.display = 'none'
    document.querySelector('#book-list').style.display = 'flex'
}


//Render
function buildOneBook(book){
    let li = document.createElement('li')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let titleH4 = document.createElement('h4')
    let authorH4 =document.createElement('h4')
    let p = document.createElement('p')
    let span = document.createElement('span')
    let h3 = document.createElement('h3')
    let ul = document.createElement('ul')
    let btn = document.createElement('button')

    li.className = 'card'
    img.src = book.image_url
    div.className = 'content'
    titleH4.textContent = book.title
    authorH4.textContent = book.author
    p.textContent = 'Inventory Count: '
    span.textContent = book.inventory
    h3.textContent = 'Reviews'
    btn.textContent = 'Delete'
    btn.addEventListener('click', (e) => {
        console.log(e.target.parentNode.remove())
        deleteBook(book.id)
    })

    book.reviews.forEach(review => {
        let li = document.createElement('li')
        li.textContent = review.content
        ul.append(li)
    })

    p.append(span)
    div.append(titleH4, authorH4, p, h3, ul)
    li.append(img, div, btn)
    //Change to prepend 
    document.querySelector('#book-list').prepend(li)

}

//Fetch
function getBooks(url){
   fetch(url)
   .then(res => res.json())
   .then(bookStore => bookStore.inventory.forEach(buildOneBook))
   .catch(error => console.error(error))
}

function postBook(book){
    // console.log(JSON.stringify(book))
    fetch('http://localhost:3000/inventory',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(book)
    })
    .then(res => res.json())
    .then(book => buildOneBook(book))
    .catch(error => console.error(error))


}

function deleteBook(id){
    console.log(id)
    fetch(`http://localhost:3000/inventory/${id}`,{
        method:'DELETE'
    })
}
function initialize(){
    // renderOneBook(bookStore.inventory[0])
    // document.querySelector('.card').remove()
    document.querySelector('#book-form').style.display = 'none'
    console.log(document.querySelector('#book-list').innerHTML = '')
    getBooks('http://localhost:3000/store/1')
   // bookStore.inventory.forEach(buildOneBook)
}
initialize()
// setTimeout(() => console.log('hi'),3000)

//GET the data > Fetch 
// .then 
// .json()
// .then
// build my elements and append them to the dom
// build out events 

