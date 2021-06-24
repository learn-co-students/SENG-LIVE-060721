document.addEventListener('DOMContentLoaded',()=>{
  getQuotes()
  setupForm()
})

const setupForm = () => {
  const quoteForm = document.querySelector('#new-quote-form')
  quoteForm.addEventListener('submit',(e) => {
    e.preventDefault()

    const newQuoteObj = {
      quote: e.target.querySelector('#new-quote').value,
      author: e.target.querySelector('#author').value
    }

    fetch('http://localhost:3000/quotes',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuoteObj)
    }).then(res => res.json())
    .then(newObj => renderQuote(newObj))
  })
}

const getQuotes = () => {
  fetch(`http://localhost:3000/quotes?_embed=likes`)
  .then(res => res.json())
  .then(quotesArray => quotesArray.forEach(quote => renderQuote(quote)))
}

const renderQuote = (quoteObj) => {
  const quoteItem = document.createElement('li')
  quoteItem.className = 'quote-card'

  const blockQuote = document.createElement('blockquote')
  blockQuote.className = 'blockquote'

  const quoteText = document.createElement('p')
  quoteText.className = 'mb-0'
  quoteText.innerText = quoteObj.quote

  const quoteAuthor = document.createElement('footer')
  quoteAuthor.className = 'blockquote-footer'
  quoteAuthor.innerText = quoteObj.author

  const br = document.createElement('br')

  const likesBtn = document.createElement('button')
  likesBtn.className = 'btn-success'
  likesBtn.innerText = 'Likes: '

  const likesCount = document.createElement('span')
  likesCount.innerText = quoteObj.likes ? quoteObj.likes.length : 0

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn-danger'
  deleteBtn.innerText = 'Delete'

  deleteBtn.addEventListener('click',(e) => {

    fetch(`http://localhost:3000/quotes/${quoteObj.id}`,{
      method: "DELETE",
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(_ => {
      e.target.parentElement.parentElement.remove()
    })
  })

  likesBtn.append(likesCount)
  blockQuote.append(quoteText,quoteAuthor,br,likesBtn,deleteBtn)
  quoteItem.append(blockQuote)

  const quoteList = document.querySelector('#quote-list')
  quoteList.append(quoteItem)
}

// <li class='quote-card'>
//     <blockquote class="blockquote">
//       <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//       <footer class="blockquote-footer">Someone famous</footer>
//       <br>
//       <button class='btn-success'>Likes: <span>0</span></button>
//       <button class='btn-danger'>Delete</button>
//     </blockquote>
//   </li>
