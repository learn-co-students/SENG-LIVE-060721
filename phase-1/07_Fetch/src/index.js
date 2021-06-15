//Events 
document.querySelectorAll('#navigation li')[0]
.addEventListener('click',renderForm)

document.querySelectorAll('#navigation li')[1]
.addEventListener('click', renderList)

document.querySelector('#book-form')
.addEventListener('submit', handleSubmit)

//Handlers/Listener
function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    let book = {
        storeId: 1,
        title: e.target.title.value,
        author: e.target.author.value,
        image_url: e.target.image_url.value,
        inventory: 0,
        reviews: []
    }
    
    postBook('http://localhost:3000/inventory', book)
    //buildOneBook(book)
    renderList()
}

function renderForm(){
    document.querySelector('#book-form').style.display = 'flex'
    document.querySelector('#book-list').style.display = 'none'
}

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
    btn.textContent = 'delete'
    btn.addEventListener('click', (e) => {
       e.target.parentNode.remove()
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
    document.querySelector('#book-list').prepend(li)
   document.querySelector('#book-list')
}
//fetch
function getBooks(url){
    //makes a asynchronous fetch call
    //the first .then handles the promise and runs with the fetch returns with data
    //we must call .json() to convert the res back into an object
    //.json asynchronous
    //we must use a second .then to run after the .json() is done converting our res into an object
    fetch(url)
    .then(res =>  res.json())
    .then(bookStore => bookStore.inventory.forEach(buildOneBook))
}

function postBook(url, book){
    console.log(JSON.stringify(book))
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(dbBook => buildOneBook(dbBook))
}

function deleteBook(id){
    fetch(`http://localhost:3000/inventory/${id}`,{
        method:'DELETE'
    })
}

function initialize(){
    document.querySelector('#book-form').style.display = 'none'
    console.log(document.querySelector('#book-list').innerHTML = '')
    getBooks('http://localhost:3000/store/1')
    // bookStore.inventory.forEach(buildOneBook)


}
initialize()
//Get the data
//Make a GET Fetch
//call a .then to handle the promise
//use .json() to convert my response 
//call another .then to handle .json()'s promise  
//build elements and append them to the dom
//build out events 

    