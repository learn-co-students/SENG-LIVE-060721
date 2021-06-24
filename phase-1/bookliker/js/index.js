document.addEventListener("DOMContentLoaded", () => {
  getBooks()
});

const getBooks = () => {
  fetch('http://localhost:3000/books')
  .then(res => res.json())
  .then(books => books.forEach(book => renderBook(book)))
}

const renderBook = (bookObj) => {
  const bookItem = document.createElement('li')
  bookItem.innerText = bookObj.title

  bookItem.addEventListener('click',() => {
    showMoreInfo(bookObj)
  })

  const bookList = document.querySelector('#list')
  bookList.append(bookItem)
}

const showMoreInfo = (clickedBook) => {
  const bookImg = document.createElement('img')
  bookImg.src = clickedBook.img_url

  const bookInfo = document.querySelector('#show-panel')
  bookInfo.innerHTML = ''

  const bookTitle = document.createElement('h3')
  bookTitle.innerText = clickedBook.title

  const bookSubTitle = document.createElement('h3')
  bookSubTitle.innerText = clickedBook.subtitle

  const bookDesc = document.createElement('p')
  bookDesc.innerText = clickedBook.description

  const bookAuthor = document.createElement('h3')
  bookAuthor.innerText = `Author: ` + clickedBook.author

  // while(bookInfo.firstChild){
  //   bookInfo.removeChild(bookInfo.lastChild)
  // }

  const userList = document.createElement('ul')

  clickedBook.users.forEach(user => {
      const userItem = document.createElement('li')
      userItem.innerText = user.username
      userList.append(userItem)
  })

  const likeBtn = document.createElement('button')
  likeBtn.innerText = 'Like'
  likeBtn.addEventListener('click',(e) => {

    if(e.target.innerText === 'Like'){
      fetch(`http://localhost:3000/books/${clickedBook.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          users: [
            ...clickedBook.users,
            {
              id: 1,
              username: 'porous'
            }
          ]
        })
      }).then(res => res.json())
      .then(updatedBookObj => {
        e.target.innerText = 'Unlike'

        const userItem = document.createElement('li')
        userItem.innerText = 'porous'
        userList.append(userItem)
      })
    }else{
      e.target.innerText = 'Like'
    }
  })

  bookInfo.append(bookImg,bookTitle,bookSubTitle,bookAuthor,bookDesc,userList,likeBtn)
}

// <img />
// <h2> title </h2>
// <h2> subtitle </h2>
// <h3> author </h3>
// <p> description </p>
// <ul>
//   <li> user 1 </li>
//   <li> user 2 </li>
// </ul>
// <button> Like </button>
