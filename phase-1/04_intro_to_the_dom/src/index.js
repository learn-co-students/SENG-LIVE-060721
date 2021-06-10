console.log(bookStore)
//Render *****************************************************
//Render one book, when the elements already exist on the dom 
function renderOneBook(book){
    document.querySelector('img').src = book.image_url 
    document.querySelector('img').className = 'image'
    document.querySelectorAll('h4')[0].textContent = book.title
    document.querySelectorAll('h4')[1].textContent = book.author
    if(book.inventory < 3){
        document.querySelector('p').style.color = 'red'
        document.querySelector('.inventory-count').textContent = `Refill Inventory! ${book.inventory}`
    } else {
        document.querySelector('.inventory-count').textContent = book.inventory
    }
    book.reviews.forEach(review => {
        let reviewLi = document.createElement('li')
        reviewLi.textContent = review.content 
        document.querySelector('.reviews').append(reviewLi)
        console.log(reviewLi)
    })
}

function buildBook(book){
    let li = document.createElement('li')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let h4Title = document.createElement('h4')
    let h4Author = document.createElement('h4')
    let p = document.createElement('p')
    let span = document.createElement('span')
    let h3 = document.createElement('h3')
    let ul = document.createElement('ul')

    li.className = 'card'
    img.src = book.image_url
    div.className = 'content'
    h4Title.textContent = book.title
    h4Author.textContent = book.author
    p.textContent = 'Inventory Count: '
    if(book.inventory < 3){
        p.textContent = 'Refill Inventory: '
        p.style.color = 'red'
    }
    span.textContent = book.inventory
    span.className = 'reviews'
    h3.textContent = 'Reviews'
    
    book.reviews.forEach(review => {
        let reviewLi = document.createElement('li')
        reviewLi.textContent = review.content
        ul.append(reviewLi)
    })

    p.append(span)
    div.append(h4Title,h4Author,p,h3, ul)
    li.append(img, div)
    document.querySelector('#book-list').append(li)

    console.log(li)
}

function renderWithInnerHTML(book){
    let li = document.createElement('li')
    li.className = 'card'
    li.innerHTML = `
        <img src="${book.image_url}" alt="book_image">
        <div class="content">
            <h4>${book.title}</h4>
            <h4>${book.author}</h4>
        <p>
            Inventory Count: 
            <span class="inventory-count">${book.inventory}</span> 
        </p>
        <h3>Reviews</h3>
        <ul class="reviews">
        </ul>
        </div>
    `
    document.querySelector('#book-list').append(li)
}
//Initialize ***********************************************
//Organizing our function calls in one place.
function initialize(){
    //renderOneBook(bookStore.inventory[0])
    document.querySelector('#book-list').innerHTML = ``
    bookStore.inventory.forEach(renderWithInnerHTML)
}
initialize()