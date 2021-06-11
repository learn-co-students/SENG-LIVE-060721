
function renderOneBook(book){
    document.querySelector('img').src = book.image_url
    document.querySelector('img').className = 'image'

    document.querySelectorAll('h4')[0].textContent = book.title
    document.querySelectorAll('h4')[1].textContent = book.author
    document.querySelector('span').textContent = book.inventory
    book.reviews.forEach(review => {
        console.log(review)
        let li = document.createElement('li')
        li.textContent = review.content
        console.log(li)
        document.querySelector('.reviews').append(li)
    })
    // console.log(document.querySelector('.inventory-count'))
    console.log(book)

}

function buildOneBook(book){
    console.log(book)
    let li = document.createElement('li')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let titleH4 = document.createElement('h4')
    let authorH4 =document.createElement('h4')
    let p = document.createElement('p')
    let span = document.createElement('span')
    let h3 = document.createElement('h3')
    let ul = document.createElement('ul')

    li.className = 'card'
    img.src = book.image_url
    div.className = 'content'
    titleH4.textContent = book.title
    authorH4.textContent = book.author
    p.textContent = 'Inventory Count: '
    span.textContent = book.inventory
    h3.textContent = 'Reviews'

    book.reviews.forEach(review => {
        let li = document.createElement('li')
        li.textContent = review.content
        ul.append(li)
    })

    p.append(span)
    div.append(titleH4, authorH4, p, h3, ul)
    li.append(img, div)
    document.querySelector('#book-list').append(li)
    console.log(li)

}

function initialize(){
    // renderOneBook(bookStore.inventory[0])
    // document.querySelector('.card').remove()
    console.log(document.querySelector('#book-list').innerHTML = '')
    bookStore.inventory.forEach(buildOneBook)
}
initialize()